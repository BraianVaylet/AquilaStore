import { useEffect, useState } from "react"
import { DEFAULT_LANGUAGE } from "utils/constants"
import { formatDate } from "./useDateTimeFormat"

const isRelativeTimeFormatSupported =
  typeof Intl !== "undefined" && Intl.RelativeTimeFormat

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

export default function useTimeAgo(timestamp) {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp))

  const handleTimeInSetInterval = (timestamp) => {
    const { unit } = getDateDiffs(timestamp)
    return unit === "second"
      ? 10000
      : unit === "minute"
      ? 60000
      : unit === "hour"
      ? 3600000
      : unit === "day"
      ? 86400000
      : 0
  }

  useEffect(() => {
    if (isRelativeTimeFormatSupported) {
      const interval = setInterval(() => {
        const newTimeAgo = getDateDiffs(timestamp)
        setTimeago(newTimeAgo)
      }, handleTimeInSetInterval(timestamp))

      return () => clearInterval(interval)
    }
  }, [timestamp])

  if (!isRelativeTimeFormatSupported) {
    return formatDate(timestamp)
  }

  let rtf
  try {
    rtf = new Intl.RelativeTimeFormat(navigator.language, {
      style: "short",
    })
  } catch (error) {
    rtf = new Intl.RelativeTimeFormat(DEFAULT_LANGUAGE, {
      style: "short",
    })
  }

  const { value, unit } = timeago

  return rtf.format(value, unit)
}
