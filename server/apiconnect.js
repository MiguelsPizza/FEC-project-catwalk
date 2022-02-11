const axios = require('axios');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe';
const {TOKEN} = require('../config.js')

//==========================================
// Products Routes
//==========================================

const getAllProducts = () => {
  let options = {
    url: `${url}/products`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//get data for product with this ID
const getProductInfo = (prodID) => {
  //options?
  let options = {
    url: `${url}/products/${prodID}`,
    headers: {
      'Authorization': `${TOKEN}`,
    }
  };
  return axios.get(options.url, options)
}

//gets all styles of product with this id
const getAllStyles = (prodID) => {
  let options = {
    url: `${url}/products/${prodID}/styles`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//get products related to display item
const relatedProductIds = (id) => {
  return axios.get(`${url}/products/${id}/related`,{
    headers: {
      'Authorization': `token ${config.TOKEN}`
    }
  })
  }

//retrieves list of products added to card
const getItemsInCart = () => {
  let options = {
    url: `${url}/cart`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options)
}

//adds a product to the cart
const addToCart = (prodID) => {
  let data = prodID
  let options = {
    url: `${url}/cart`,
    headers: {
      'Authorization': `${TOKEN}`,
      'Content-Type': 'application/json'
    }
  };
  return axios.post(options.url, data, options)
}

//==========================================
// Reviews and Ratings Routes
//==========================================


const getReviews = (productId) => {
  let options = {
    url: `${url}/reviews/?product_id=${productId.product_id}&count=${productId.count ? productId.count : 5}&page=${productId.page ? productId.page : 1}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options);
};

const getReviewsMeta = (productId) => {
  let options = {
    url: `${url}/reviews/meta/?product_id=${productId.product_id}`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.get(options.url, options);
};

const postReview = (newReview) => {
  let options = {
    url: `${url}/reviews`,
    headers: {
      'Authorization': `${TOKEN}`
    }
  };
  return axios.post(options.url, newReview, options);
};

const markReviewAsHelpful = (reviewId) => {
  return axios({
    method: "PUT",
    url: `${url}/reviews/${reviewId.review_id}/helpful`,
    headers: {
      'Authorization': `${TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
};

const reportReview = (reviewId) => {
  return axios({
    method: "PUT",
    url: `${url}/reviews/${reviewId.review_id}/report`,
    headers: {
      'Authorization': `${TOKEN}`,
      'Content-Type': 'application/json'
    }
  })
}

// //==========================================
// // Questions And Answers Routes
// //==========================================


const getQuestions = (productId) => {
  let options = {
    url: `${url}/qa/questions/${productId}`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

const getAnswers = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/answers`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    }
  };
  return axios.get(options)
}

const addQuestion = (data) => {
  let options = {
    url: `${url}/qa/questions`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios.post(options, data)
}

const addAnswer = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/answers`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
    data: data
  };
  return axios.post(options, data)
}

const markQHelpful = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/helpful`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const reportQuestion = (questionId) => {
  let options = {
    url: `${url}/qa/questions/${questionId}/report`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const markAHelpful = (answerId) => {
  let options = {
    url: `${url}/qa/answers/${answerId}/helpful`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}

const reportAnswer = (answerId) => {
  let options = {
    url: `${url}/qa/answers/${answerId}/report`,
    headers: {
      'Authorization': `token ${config.TOKEN}`
      'Content-Type': 'application/json'
    },
  };
  return axios.put(options)
}


module.exports = {
  getAllProducts: getAllProducts,
  getProductInfo: getProductInfo,
  addToCart: addToCart,
  getItemsInCart: getItemsInCart,
  getAllStyles: getAllStyles,
  getReviews: getReviews,
  getReviewsMeta: getReviewsMeta,
  postReview: postReview,
  markReviewAsHelpful: markReviewAsHelpful,
  reportReview: reportReview,
  getQuestions: getQuestions,
  getAnswers: getAnswers,
  addQuestion: addQuestion,
  addAnswer: addAnswer,
  markQHelpful: markQHelpful,
  reportQuestion: reportQuestion,
  markAHelpful: markAHelpful,
  reportAnswer: reportAnswer
}