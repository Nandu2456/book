import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to our BOOKHUB!

At BOOKHUB, we are dedicated to providing a comprehensive and user-friendly platform for managing your library resources. Whether you're a student, a librarian, or a book enthusiast, our website offers a range of features to enhance your library experience.

We aim to foster a love for reading and knowledge by creating an accessible and efficient library management system. Our goal is to empower librarians, educators, and readers to connect, explore, and learn through an innovative digital platform.

At BOOKHUB, our mission is to streamline library operations, simplify resource management, and promote a vibrant reading culture. We strive to provide a seamless user experience, enabling users to discover, borrow, and engage with a diverse collection of books and other materials.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About