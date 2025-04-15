// Create a form to submit a blog to a mock API (reqres.in)

  const submitBtn = document.getElementById('submitBlog');

  submitBtn.addEventListener('click', async ()=>{

    const blogTitle = document.getElementById('blogDescription').value;
    const blogDescription = document.getElementById('blogDescription').value;

    if(blogDescription === "" && blogTitle === ""){
      alert('Please enter the blog details');
      return 0;
    }

    const url = 'https://reqres.in/';
    let bodyData = {
      blogTitle: blogTitle,
      blogDescription: blogDescription
    };
    
    bodyData = JSON.stringify(bodyData);

    const response = await sendReq(bodyData, url);
    console.log(response); // undefined

  });


  async function sendReq(data, url){
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then((response)=>{
      console.log('Logging response after form submission.');
      console.log(response);
      return response
    })
    .catch((error)=>{
      console.log('Following error occured',error);
      return error;
    })
  }