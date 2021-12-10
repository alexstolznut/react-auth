import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

export const ArticleTemplatePage = (props) => {
    const {articleId} = useParams();
    const [editorState, setEditorState] = useState('');
    useEffect(async () => {
        const results = await axios.get(`/api/getarticle/${articleId}`);
        const article = results.data
        const rawBody = await convertFromRaw(JSON.parse(article.article));
        console.log(rawBody)
        setEditorState(EditorState.createWithContent(rawBody));
        // setArticleBody(convertFromRaw(JSON.parse(article.article)));
        
   }, [])

//    const [editorState, setEditorState] = useState(
//     () => EditorState.createWithContent(articleBody)
//   );

    return (
        <div>
            
            { !editorState ? <div>Article Page {articleId}</div> : <div><Editor readOnly={true} editorState={editorState} /></div>}


        </div>
    )
}
