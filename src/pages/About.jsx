import React, { useEffect } from 'react';

// Animation
import Aos from 'aos';

function About() {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    }, [])

    return (
        <div className='about'>
            <section>
                <div className="content">
                    <h1 data-aos="fade-right">&lt;About Us/&gt;</h1>
                    <p data-aos="fade-right" data-aos-delay="600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sequi nesciunt possimus dolore molestias, voluptatibus dolorem incidunt perferendis autem. Maiores enim corporis saepe dolorem, amet reprehenderit esse fugit sunt ratione aliquam aperiam quos consequatur, necessitatibus, porro at non et ullam quam? Dignissimos voluptate rem deleniti laborum voluptatum fuga tenetur suscipit, commodi alias nesciunt iure repellendus cum, quibusdam quaerat in incidunt facilis dolores sunt vel, deserunt voluptatem libero laboriosam omnis a. Minima veritatis neque commodi ad velit esse quidem ducimus, ipsa et quam quaerat, nesciunt at corporis magnam ipsum nostrum praesentium quia quasi dolorum odit quisquam deleniti rerum. Delectus sit ut voluptatibus amet. Pariatur explicabo reiciendis, nobis eos voluptas maiores vitae animi! Vero atque, praesentium veniam eos earum dolores cupiditate rem quo ratione doloribus facilis perferendis nisi corrupti culpa recusandae quidem eius at id, tempora nesciunt impedit magnam. Amet ab deleniti architecto, libero sunt, est odit reprehenderit consequatur modi facilis exercitationem quam sint officiis laboriosam? Natus voluptatem dolor ullam cum cupiditate sunt neque ut quae. Optio ducimus ipsa, impedit praesentium eligendi deleniti laborum sit recusandae esse doloribus nulla ad veniam quae aliquam maxime quas, ea, odit quod laboriosam deserunt soluta. Ullam tempora repellendus eos quae quis. Harum accusamus facere iure voluptatum.</p>
                </div>
                <div className="waves" data-aos="fade-up" data-aos-delay="700">
                    <div className='wave wave1'></div>
                    <div className='wave wave2'></div>
                </div>
            </section>
        </div>
    )
}

export default About;
