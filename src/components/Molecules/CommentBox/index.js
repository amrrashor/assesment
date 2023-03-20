import React, {useState} from "react";
import { Form } from './commentBox.style';

const CommentBox = ({ onAddComment }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newComment = {
        name: name,
        email: email,
        body: body,
        id: id
        };
        onAddComment(newComment);
        setName('');
        setEmail('');
        setBody('');
        setId()
    };

    return (
    <Form onSubmit={handleSubmit}>
        <h3>Want to comment?</h3>
        
            <input
                placeholder="Your name*"
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            <input
                placeholder="Your email*"
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <textarea
                placeholder="Your comment*"
                id="body"
                value={body}
                onChange={(event) => setBody(event.target.value)}
                required
            />
            <button type="submit">Add Comment</button>
    </Form>
    );
};

export default CommentBox