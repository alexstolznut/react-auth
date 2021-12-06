import React, { useState } from 'react';
import {
  ToggleButtonGroup,
  EditorContainer,
  Editor,
  EditorToolbar,
  InlineToggleButton,
  ToggleButtonGroupProps,
} from 'draft-js-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import Button from '@mui/material/Button';
import '../Editor.css';
import axios from 'axios';
import {useToken} from '../auth/useToken';
import {useUser} from '../auth/useUser';
import { useHistory } from 'react-router';

export const ArticleEditorPage = () => {

    const history = useHistory();
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty()
  );
    const [token] = useToken();
    const user = useUser();
    const {id} = user;

    const onSaveArticleClick = async() => {
        const content = editorState.getCurrentContent();
        const article = JSON.stringify(convertToRaw(content));
        console.log(article);
        try{
            const response = await axios.post(`/api/${id}/uploadarticle`,{
                article: article
            }, {
                headers: { Authorization: `Beaer ${token}`}
            })
    
            console.log(response.data);
            // console.log(token);
    
            // setToken(token);
    
            history.push('/dashboard');
        } catch(err){
           console.log(err.message);
        }
        

    }
  
  return (
    <EditorContainer
      editorState={editorState}
      onChange={setEditorState}
    >
      <EditorToolbar>
        <ToggleButtonGroup size='small'>
          <InlineToggleButton value="BOLD">
            Bold
          </InlineToggleButton>
          <InlineToggleButton value="ITALIC">
            Italic
          </InlineToggleButton>
          <InlineToggleButton value="STRIKETHROUGH">
            Strikethrough
          </InlineToggleButton>
          <InlineToggleButton value="UNDERLINE">
            Underline
          </InlineToggleButton>
          <InlineToggleButton value="CODE">
            Code
          </InlineToggleButton>
        </ToggleButtonGroup>
        <Button variant="text" onClick={onSaveArticleClick}>Save</Button>
      </EditorToolbar>
      <Editor placeholder='Enter some text..' />
    </EditorContainer>
  );
};

// export default ArticleEditorPage;
