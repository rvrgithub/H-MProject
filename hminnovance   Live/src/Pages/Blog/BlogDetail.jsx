import { useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "../../css/style.css"
import Header from '../../component/commonheader/Header'
import Footer from "../../component/shared/Footer";
import PageHelmet from "../../component/shared/PageHelmet";
import axios from "axios";

export default function BlogDetail() {
  const token = localStorage.getItem('token');
  const [postInfo,setPostInfo] = useState(null);
  const {id} = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/get-blog/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
          console.log(postInfo[0].title)
          if(token){
            console.log("yes")
          }else{
            console.log("no")
          }
        });
      });
  }, []);

  if (!postInfo) return '';

  const deleteHandler = async ()=>{
    await axios.delete(`http://localhost:8000/api/v1/blog/${id}`)
    navigate("/blog")
  }

  return (
      <>
      {/* if we wanna add description or title or keywords for specific blog add below */}
      <PageHelmet 
          pageTitle={postInfo[0].title}
          description={postInfo[0].summary}
          // keywords="About US Website Designing, Digital Agency, Digital Marketing, Internet Marketing"
          canonical= "https://www.hminnovance.com/blogs"
        />
        <Header />
          <div className="container-fluid">
            <div style={{textAlign:"center",marginTop:"40px"}}>
                <h1 style={{fontWeight:"bolder",marginBottom:"10px"}}>Blog</h1>
                <h1>{postInfo[0].title}</h1>
            </div>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"50px"}}>
          <img className="img-fluid" src={`http://localhost:8000/api/v1/blog/${postInfo[0].file}`} alt="H&M Blog" title="H&M Blog"/>
            </div>
            <div className="container" style={{marginTop:"50px"}}>
                {/* <div dangerouslySetInnerHTML={{__html:postInfo[0].content}} /> */}
                  <div className="content" dangerouslySetInnerHTML={{__html:postInfo[0].content}}/>
            </div>
        </div>
        <div style={{textAlign:"center",marginBottom:"20px"}}>
          {
            token?<button onClick={()=>{deleteHandler()}}>Delete The Blog</button>:<></>
          }
        </div>
        <Footer />
      </>
  );
}



