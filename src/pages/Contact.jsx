import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {name , email , msg}

        const url = 'http://localhost:5000/api/contact';

        fetch(url , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {

            if(res.ok){
                console.log(res);
            }else{
                console.log(res);
            }
            
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className='contact'>
            <section>
                <form className="form-container">
                    <div className="fields">
                        <div className="field">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="field">
                        <label>Message</label>
                        <textarea
                            type="text"
                            placeholder="Enter you Message here ...."
                            value={msg}
                            onChange={(e) => setMsg(e.target.value)} />
                    </div>
                    <button onClick={(e) => handleSubmit(e)}>Send</button>
                </form>
            </section>
        </div>
    )
}

export default Contact; 
