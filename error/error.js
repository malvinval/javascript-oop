const error = new Error();

error.message = "You are an idiot!";
error.name = "Brain error";
error.stack = 0;

throw error;