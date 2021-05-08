export const authCheck = () => {
  const date = new Date();
  const data =  JSON.parse(localStorage.getItem("token")) || null;
  try{
    if(data.expiry > date.getTime()){
     return data.token;
    }
    else {
      return null;
    }
  }
  catch {
    return null;
  }
}

export const authUpdate = (token) => {
  localStorage.removeItem("token");
  const date = new Date();
  localStorage.setItem("token", JSON.stringify({token, expiry: date.getTime() + 1000 * 60 * 60 * 1}))
  console.log("Auth Update");
}