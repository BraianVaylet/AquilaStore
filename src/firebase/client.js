import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4BwDPJQiCJEPQkGLNBGVF5hmvsdqEXus",
  authDomain: "aquilastore-5e5b4.firebaseapp.com",
  projectId: "aquilastore-5e5b4",
  storageBucket: "aquilastore-5e5b4.appspot.com",
  messagingSenderId: "541611517575",
  appId: "1:541611517575:web:a4607cc5e3b2969536ba22",
  measurementId: "G-6M9DZJMWYY",
}

try {
  !firebase.apps.length && firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.error("firebase-error", error)
}

const db = firebase.firestore()

/**
 * Firebase Client
 * @category  Firebase
 * @see https://firebase.google.com/docs/web/setup?hl=es
 * @author Braian D. Vaylet
 * @description Funciones para mapear, obtener, crear, editar y eliminar registros de la base de datos.
 */
export class FirebaseClient {
  // * MAP FUNC
  /**
   * mapUserFromFirebaseAuthToUser
   * @function
   * @param {object} user
   * @returns {object} {avatar: String, username: String, email: String, uid: String}
   * @description [Firebase] Mapea al user que obtengo desde la BD a un nuevo objeto de user
   */
  mapUserFromFirebaseAuthToUser(user) {
    const { displayName, email, photoURL, uid } = user
    return {
      avatar: photoURL,
      username: displayName,
      email,
      uid,
    }
  }

  /**
   * mapProductFromFirebaseToProduct
   * @function
   * @param {object} doc
   * @returns {object} {...data, id: String, createdAt: Date}
   * @description [Firebase] Mapea el elemento Product que obtengo desde la BD a un nuevo objeto Product con el id y la fecha de creación
   */
  mapProductFromFirebaseToProduct(doc) {
    const data = doc.data()
    const id = doc.id
    const createdAt =
      data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
    return { id, ...data, createdAt: +createdAt.toDate() }
  }

  /**
   * mapPurchaseFromFirebaseToPurchase
   * @function
   * @param {object} doc
   * @returns {object} {...data, id: String, createdAt: Date}
   * @description [Firebase] Mapea el elemento Purchase que obtengo desde la BD a un nuevo objeto Purchase con el id y la fecha de creación
   */
  mapPurchaseFromFirebaseToPurchase(doc) {
    const data = doc.data()
    const id = doc.id
    const createdAt =
      data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
    return { id, ...data, createdAt: +createdAt.toDate() }
  }

  /**
   * mapStorageFromFirebaseToStorage
   * @function
   * @param {object} doc
   * @returns {object} {...data, id: String, createdAt: Date}
   * @description [Firebase] Mapea el elemento Storage que obtengo desde la BD a un nuevo objeto Storage con el id y la fecha de creación
   */
  mapStorageFromFirebaseToStorage(doc) {
    const data = doc.data()
    const id = doc.id
    const createdAt =
      data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
    return { id, ...data, createdAt: +createdAt.toDate() }
  }

  /**
   * mapMessagesFromFirebaseToPurchase
   * @function
   * @param {object} doc
   * @returns {object} {...data, id: String, createdAt: Date}
   * @description [Firebase] Mapea el elemento Message que obtengo desde la BD a un nuevo objeto Message con el id y la fecha de creación
   */
  mapMessagesFromFirebaseToPurchase(doc) {
    const data = doc.data()
    const id = doc.id
    const createdAt =
      data.createdAt || firebase.firestore.Timestamp.fromDate(new Date())
    return { id, ...data, createdAt: +createdAt.toDate() }
  }

  // * AUTHENTICATION FUNC
  /**
   * onAuthStateChanged
   * @param {object} doc
   * @returns {object} mapUserFromFirebaseAuthToUser(user)
   * @description [Firebase] Reviso si el usuario esta autentificado
   */
  onAuthStateChanged(onChange) {
    return firebase.auth().onAuthStateChanged((user) => {
      const normalizedUser = user
        ? this.mapUserFromFirebaseAuthToUser(user)
        : null
      onChange(normalizedUser)
    })
  }

  /**
   * loginWithGoogle
   * @returns {Promise}
   * @description [Firebase] Autentificación con Google
   */
  loginWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
  }

  /**
   * loginWithFacebook
   * @returns {Promise}
   * @description [Firebase] Autentificación con Facebook
   */
  loginWithFacebook() {
    const facebookProvider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(facebookProvider)
  }

  /**
   * onAuthSignOut
   * @returns {Promise}
   * @description [Firebase] Desautentificar al user
   */
  onAuthSignOut() {
    return firebase.auth().signOut()
  }

  // * ADD FUNC
  /**
   * addProduct
   * @param {object} Product { title: String, description: String, pictureName: String, pictureUrl: String, price: Number, stock: Number, brand: String, model: String, category: [Jackets, Shirts, Shoes, Accesories], calification: Number, gender: [Male, Female, All], sizes: Array(String), colors: Array(String),}
   * @returns {Promise<object>}
   * @description [Firebase] Agrego un nuevo producto a la base de datos
   */
  addProduct({
    title,
    description,
    pictureName,
    pictureUrl,
    price,
    stock,
    brand,
    model,
    category,
    calification,
    gender,
    sizes,
    colors,
  }) {
    return db.collection("products").add({
      title,
      description,
      pictureName,
      pictureUrl,
      price,
      stock,
      brand,
      model,
      category,
      calification,
      gender,
      sizes,
      colors,
      isActive: true,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
  }

  /**
   * addPurchase
   * @param {object} Purchase { email:String, fullname:String, dni:String, phone:String, address:String, addressNum :String, addressInfo:String, products: Array(Product), total: Number, itsPaid: Boolean, createdAt = firebase(data), status = "init" }
   * @returns {Promise}
   * @description [Firebase] Agrego un nueva compra a la base de datos
   */
  addPurchase({
    email,
    fullname,
    dni,
    phone,
    address,
    addressNum,
    addressInfo,
    products,
    total,
    itsPaid = false,
    createdAt = firebase.firestore.Timestamp.fromDate(new Date()),
    status = "init",
  }) {
    products.forEach(async (product) => {
      const productDb = await this.fetchProductsByID(product.id)
      if (productDb.stock > 0 && productDb.stock >= product.count) {
        // actualizo stock
        await db
          .collection("products")
          .doc(product.id)
          .update({ stock: productDb.stock - product.count })
      } else {
        return new Error("No hay Stock")
      }
    })
    // creo una compra
    return db.collection("purchases").add({
      email,
      fullname,
      dni,
      phone,
      address,
      addressNum,
      addressInfo,
      products,
      total,
      itsPaid,
      createdAt,
      status,
    })
  }

  /**
   * addStorage
   * @param {object} Storage { email:String, favourites: Array(Product), notification: Array(object(Notification)), cart> Array(Product) }
   * @returns {Promise}
   * @description [Firebase] Guardo una copia del LocalStorage del usuario, al momento de hacer un onAuthSignOut se guarda el contenido en la bd y se levanta al momento de volver a autentificarse
   */
  async addStorage({ email, favourites, notifications, cart }) {
    try {
      const docs = await this.fetchStorageByUser(email)
      if (docs.length === 0) {
        return db
          .collection("storage")
          .add({ email, favourites, notifications, cart })
      } else if (docs.length === 1) {
        return db
          .collection("storage")
          .doc(docs[0].id)
          .update({ favourites, notifications, cart })
      } else {
        return new Error(
          "hay mas de un registro en storage para este usuario, revisar!"
        )
      }
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * addMessageWorkWithUs
   * @param {object} Message { email:String, name:String, phone:String, linkedin:String }
   * @returns {Promise}
   * @description [Firebase] Guardo un nuevo mensaje en la BD del tipo 'workWithUs'
   */
  addMessageWorkWithUs({ email, name, phone, linkedin }) {
    return db.collection("messages").add({
      email,
      name,
      phone,
      linkedin,
      viewed: false,
      type: "workWithUs",
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
  }

  /**
   * addMessageHelp
   * @param {object} Message { email:String, name:String, phone:String, comment:String }
   * @returns {Promise}
   * @description [Firebase] Guardo un nuevo mensaje en la BD del tipo 'help'
   */
  addMessageHelp({ email, name, phone, comment }) {
    return db.collection("messages").add({
      email,
      name,
      phone,
      comment,
      viewed: false,
      type: "help",
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    })
  }

  // * EDIT FUNC
  /**
   * editProduct
   * @param {string} id
   * @param {object} Product { title: String, description: String, pictureName: String, pictureUrl: String, price: Number, stock: Number, brand: String, model: String, category: [Jackets, Shirts, Shoes, Accesories], calification: Number, gender: [Male, Female, All], sizes: Array(String), colors: Array(String),}
   * @returns {Promise}
   * @description [Firebase] Edito un producto por id
   */
  editProduct(
    id,
    {
      title,
      description,
      pictureName,
      pictureUrl,
      price,
      stock,
      brand,
      model,
      category,
      calification,
      gender,
      sizes,
      colors,
    }
  ) {
    return db
      .collection("products")
      .doc(id)
      .update({
        title,
        description,
        pictureName,
        pictureUrl,
        price,
        stock,
        brand,
        model,
        category,
        calification,
        gender,
        sizes,
        colors,
        isActive: true,
        createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      })
  }

  /**
   * changeIsActiveProductByID
   * @param {string} id
   * @param {boolean} active
   * @returns {Promise}
   * @description [Firebase] Edito el estado isActive de un producto
   */
  async changeIsActiveProductByID(id, active) {
    try {
      return await db
        .collection("products")
        .doc(id)
        .update({ isActive: active })
    } catch (error) {
      console.error("error", error)
    }
  }

  // * GET FUNC
  /**
   * fetchAllProducts
   * @returns {array} Products
   * @description [Firebase] Obtengo todos los productos de la base de datos
   */
  async fetchAllProducts() {
    try {
      const doc = await db.collection("products").get()
      return doc.docs.map(this.mapProductFromFirebaseToProduct)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchProducts
   * @returns {array} Products
   * @description [Firebase] Obtengo todos los productos de la base de datos si isActive === true
   */
  async fetchProducts() {
    try {
      const doc = await db
        .collection("products")
        .where("isActive", "==", true)
        .get()
      return doc.docs.map(this.mapProductFromFirebaseToProduct)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchProductsByCategory
   * @param {string} category
   * @returns {array} Products
   * @description [Firebase] Obtengo todos los productos de la base de datos filtrados por categoria donde isActive === true
   */
  async fetchProductsByCategory(category) {
    try {
      const doc = await db
        .collection("products")
        .where("category", "==", category)
        .where("isActive", "==", true)
        .get()
      return doc.docs.map(this.mapProductFromFirebaseToProduct)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchProductsByID
   * @param {string} id
   * @returns {object} Product
   * @description [Firebase] Obtengo un producto de la base de datos por id
   */
  async fetchProductsByID(id) {
    try {
      const doc = await db.collection("products").doc(id).get()
      if (doc.exists) {
        return this.mapProductFromFirebaseToProduct(doc)
      } else {
        console.error("error", "Error, el producto no existe")
        return {}
      }
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchAllPurchases
   * @returns {array} Purchases
   * @description [Firebase] Obtengo todas las compras de la base de datos
   */
  async fetchAllPurchases() {
    try {
      const doc = await db
        .collection("purchases")
        .orderBy("createdAt", "asc")
        .get()
      return doc.docs.map(this.mapPurchaseFromFirebaseToPurchase)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchAllPurchasesByUser
   * @param {string} email
   * @returns {array} Purchases
   * @description [Firebase] Obtengo todas las compras de la base de datos filtradas por el email de un user
   */
  async fetchAllPurchasesByUser(email) {
    try {
      const doc = await db
        .collection("purchases")
        .where("email", "==", email)
        .get()
      return doc.docs.map(this.mapPurchaseFromFirebaseToPurchase)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchStorageByUser
   * @param {string} email
   * @returns {object} Storage {favourites, notifications, cart}
   * @description [Firebase] Obtengo la copia del storage almacenada en la bd por email del user
   */
  async fetchStorageByUser(email) {
    try {
      const doc = await db
        .collection("storage")
        .where("email", "==", email)
        .get()
      return doc.docs.map(this.mapStorageFromFirebaseToStorage)
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * fetchAllMessages
   * @returns {array} Messages
   * @description [Firebase] Obtengo todos los mensajes de la base de datos
   */
  async fetchAllMessages() {
    try {
      const doc = await db
        .collection("messages")
        .orderBy("createdAt", "asc")
        .get()
      return doc.docs.map(this.mapMessagesFromFirebaseToPurchase)
    } catch (error) {
      console.error("error", error)
    }
  }

  // * DELETE FUNC
  /**
   * deleteProductsByID
   * @param {string} id
   * @returns {Promise}
   * @description [Firebase] Elimino un producto de la bd por id
   */
  async deleteProductsByID(id) {
    try {
      return await db.collection("products").doc(id).delete()
    } catch (error) {
      console.error("error", error)
    }
  }

  /**
   * deleteMessagesByID
   * @param {string} id
   * @returns {Promise}
   * @description [Firebase] Elimino un mensaje de la bd por id
   */
  async deleteMessagesByID(id) {
    try {
      return await db.collection("messages").doc(id).delete()
    } catch (error) {
      console.error("error", error)
    }
  }
}
