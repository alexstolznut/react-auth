import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import axios from 'axios';

export default function Dashboard() {
    const [articleData, setArticleData] = useState([]);
    const [articleBody, setArticleBody] = useState('');
    let articleArray = [];
    let articleContent;
    useEffect(async () => {
         const results = await axios.get('/api/getarticles');
         articleArray = results.data;
         setArticleData(articleArray);
    }, [])


    return (
        <div>
            
          {articleData.length<=0 ? <div>loading</div> :  articleData.map((item)=>(
              <Link to={`/article/${item.articleId}`}>
              <div style={{minWidth: '200px', minHeight:'100px', background:'gray'}}><p>User ID: {item.userId}</p><p>Article ID: {item.articleId}</p><p>{item.submissionDate}</p> <p>Article Content: {item.articleContent}</p>
              </div>
              </Link>
          ))}
        
        </div>
    )
}
