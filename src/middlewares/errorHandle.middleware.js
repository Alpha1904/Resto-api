
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || (err.statusCode >= 500 ? 'error' : 'fail');
  
    // --- Development Environment---
    if (process.env.NODE_ENV === 'development') {
      console.error('ERROR', err); 
      return res.status(err.statusCode).json({
        status: err.status,
        error: err, 
        message: err.message,
        stack: err.stack,
      });
    }
  
    // --- Production Environment:  ---
    if (process.env.NODE_ENV === 'production') {
      let error = { ...err }; 
      error.message = err.message; 

      if (error.isOperational) {
        return res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      } else {
        console.error('ERROR ', err);
        return res.status(500).json({
          status: 'error',
          message: 'Something went very wrong!',
        });
      }
    }


    console.error('ERROR 💥', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  };
  