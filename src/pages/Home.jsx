import React from "react";
import Layout from "../component/layout";
import "./Home.css";
import VarietyContent from "../component/VarietyContent";

const Home = () => {
  return (
    <Layout>
      <section className="homeSection">
        <video autoPlay loop muted playsInline className="backVideo">
          <source
            src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"
            type="video/mp4"
          />
        </video>
        <div className="content">
          <h1>Simply the Finest</h1>
        </div>
      </section>

      {/* SECTION 2 */}

      <section className="secondSection ">
        <div className=" mt-5">
          <div className="row ">
            <div className="content col-md-12 col-lg-6">
              <h4>WELCOME TO 24 CARROTS</h4>
              <h1>Remarkable Catering & Events</h1>
              <p>
                24 Carrots is the premier catering and events company of choice
                in Southern California. We create remarkable experiences by
                offering the finest quality foods and providing unsurpassed
                personalized service, driven by our passion for life’s special
                occasions.
              </p>

              <button className="btn contBtn">Get in touch</button>
            </div>

            <div className="cards col-md-12 col-lg-6 ">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg"
                      className="d-block carouselImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg"
                      className="d-block carouselImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg"
                      className="d-block carouselImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg"
                      className="d-block carouselImg"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION END */}

      {/* THIRD SECTION START */}

      <section className="thirdSection">
        <div className="container mt-5">
          <div className="row">

            <div className="col-md-4">

              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride=""
              >
                <div className="carousel-indicators" style={{visibility:"hidden"}} id="thirdCarousel">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active firstBtn"
                    aria-current="true"
                    aria-label="Slide 1"
                  >
                  </button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    className="secondBtn"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    className="thirdBtn"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="3"
                    className="fourthBtn"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner h-100" style={{ width: "35vw" }}>
                  <div className="carousel-item active">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg"
                      className="d-block thirdSecImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg"
                      className="d-block thirdSecImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/2.3-Corporate-Joel-Maus.jpg"
                      className="d-block thirdSecImg"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://24carrots.com/wp-content/uploads/2023/10/2.4-Venues-Jenny-Quicksall.jpg"
                      className="d-block thirdSecImg"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8 content">
              <h1>Making Every Experience Magical</h1>
              <div className="varieties d-flex gap-5 justify-content-start align-content-start">
                <ul>
                  <li>
                    <a
                      onClick={(e) => {
                        e.target.style.color = "#1a4122";
                        const thirdCar = document.querySelectorAll(".varieties ul li a");
                        const carouselBtn=document.querySelector(".firstBtn")
                        thirdCar.forEach(a=>{
                          if(a==e.target){
                            a.style.color="#1a4122";
                          }else{
                            a.style.color="black"
                          }
                        })
                        carouselBtn.click();
                      }}
                    >
                      Weddings
                    </a>
                  </li>
                  <li>
                    <a onClick={(e) => {
                        e.target.style.color = "#1a4122";
                        const thirdCar = document.querySelectorAll(".varieties ul li a");
                        const carouselBtn=document.querySelector(".secondBtn")
                        thirdCar.forEach(a=>{
                          if(a==e.target){
                            a.style.color="#1a4122";
                          }else{
                            a.style.color="black"
                          }
                        })
                        carouselBtn.click();
                      }}>Social</a>
                  </li>
                  <li>
                    <a onClick={(e) => {
                        e.target.style.color = "#1a4122";
                        const thirdCar = document.querySelectorAll(".varieties ul li a");
                        const carouselBtn=document.querySelector(".thirdBtn")
                        thirdCar.forEach(a=>{
                          if(a==e.target){
                            a.style.color="#1a4122";
                          }else{
                            a.style.color="black"
                          }
                        })
                        carouselBtn.click();
                      }}>Corporate</a>
                  </li>
                  <li>
                    <a onClick={(e) => {
                        e.target.style.color = "#1a4122";
                        const thirdCar = document.querySelectorAll(".varieties ul li a");
                        const carouselBtn=document.querySelector(".fourthBtn")
                        thirdCar.forEach(a=>{
                          if(a==e.target){
                            a.style.color="#1a4122";
                          }else{
                            a.style.color="black"
                          }
                        })
                        carouselBtn.click();
                      }}>Venues</a>
                  </li>
                </ul>

                {/* TEXT CAROUSEL */}

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="tryBtn" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item ">
    <h5> EXCEPTIONAL WEDDINGS</h5>
                      <p>
                        The most important day of your life, is ours too. Your
                        wedding should be the ultimate celebration of your
                        relationship, and our team of experts guide you through
                        the process, offering peace of mind and a remarkable
                        experience.
                      </p>
                      <button className="btn learnMoreBtn">Learn More</button>
    </div>
    <div className="carousel-item active">
    <h5>INCOMPARABLE SOCIAL EVENTS</h5>
                      <p>
                        We sweat the small stuff, so you don’t have to. For all
                        of life’s special occasions, we give your anniversary,
                        shower, or birthday party the attention it deserves,
                        allowing you to focus on being present with your guests!
                      </p>
                      <button className="btn learnMoreBtn">Learn More</button>
    </div>
    <div className="carousel-item">
    <h5>ONE-OF-A-KIND CORPORATE EVENTS</h5>
                      <p>
                        Our job is to make you look good. From office lunches to
                        large-scale corporate events, we’ve made our business
                        out of making your business shine.
                      </p>
                      <button className="btn learnMoreBtn">Learn More</button>
    </div>
  </div>
  
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOURTH SECTION START */}

      <section className="fourthSection">
        <img
          src="https://www.thepublicdiscourse.com/wp-content/uploads/2021/06/AdobeStock_193705648.jpeg"
          alt=""
          className="fourthSecImg"
        />
        <div className="circleContent">
          <h5>Venues</h5>
          <h1>Unforgettable Venues</h1>
          <p>
            24 Carrots is the exclusive or preferred caterer at Southern
            California’s most spectacular properties. From intimate understated
            spaces to large and luxurious, we’ll help you find the event venue
            that makes your heart skip a beat.
          </p>
          <button className="btn contBtn" style={{ color: "white" }}>
            Explore Venues
          </button>
        </div>
      </section>

      {/* SIXTH SECTION START */}

      <section className="sixthSection">
        <h1>Far More Than Just Business</h1>
        <p>
          The way you do anything is the way you do everything. We haven’t
          cracked the code on catering; we simply care unreasonably about every
          aspect of what we do. We care about people as much as we care about
          details, and we absolutely refuse to compromise on making your day
          anything but the best. We’ve got your back from the initial idea to
          the final farewell!
        </p>
        <iframe
          className="ytVideo"
          src="https://www.youtube.com/embed/7gPP9hsV4a0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </section>

      {/* 7th SECTION */}

      <section className="seventhSection">
        <div>
          <h1>Great Food & A Whole Lot More</h1>
          <p>
            Catering is just the beginning. Sure, we love astonishing your
            guests with attentive service, thoughtful food, and an inviting
            environment. But what really matters most is helping you create
            memories that will last for a lifetime. Our industry experts think
            of all the little things that turn an ordinary event into an
            unforgettable experience.
          </p>
          <button className="btn contBtn">Explore Services</button>
        </div>
      </section>

      {/* Eighth SECTION START */}

      <section className="eighthSection container">
        <div className="row">
          <div className="firstContent col-md-4">
            <div>
              <h3>Gourmet Catering</h3>
              <p>
                Our professionally-trained culinary team is passionate and proud
                of our diverse and thoughtful menu, always cooking up something
                that aligns with your great taste.
              </p>
              <button className="btn eighBtn">Learn More</button>
            </div>

            <div>
              <h3>Bar Service</h3>
              <p>
                Our sophisticated flavor expertise enables us to create
                inventive concoctions that generate buzz in more ways than one!
              </p>
              <button className="btn eighBtn">Learn More</button>
            </div>
          </div>

          <div className="carousel col-md-4">
            <div
              id="carouselExampleCaptions"
              className="carousel"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
                    className="d-block w-100 eighSecImg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
                    className="d-block w-100 eighSecImg"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif"
                    className="d-block w-100 eighSecImg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="secondContent col-md-4">
            <div>
              <h3>Staffing</h3>
              <p>
                The hand-selected team at 24 Carrots are just as important to
                our reputation as our gourmet food. Our staff is certainly the
                best at what they do, and you’ll work with professionals who
                genuinely care about the success of your event!
              </p>
              <button className="btn eighBtn">Learn More</button>
            </div>

            <div>
              <h3>Event Production</h3>
              <p>
                If mind-blowing spectacles and immersive guest experiences are
                what you’re after, the specialists at 24 Carrots can pull it off
                on an epic scale!
              </p>
              <button className="btn eighBtn">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* 9th section start */}

      <section className="ninthSection">
        <div className="head">
          <h1>Our Happy Clients</h1>
          <p>
            Food may be our love language, but words of affirmation always make
            us ecstatic! Read what our happy clients have to say about how we
            made their day great.
          </p>
        </div>

        {/* CAROUSEL START */}

        <div
          id="carouselExampleCaptions"
          className="carousel"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg"
                className="d-block  nineImg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item nineCard">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg"
                className="d-block  nineImg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/10/4.3-Desert-Born-Studios.jpg"
                className="d-block nineImg"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* 10th SECTION */}

        <section className="tenthSection">
          <h1>What's Cookin'</h1>
          <div className="cards d-flex gap-5">
            <div className="card card1">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/11/11.02.16-Foundsgiving-Studio-EMP-21-616x440.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn tenBtn1">
                  24 Carrots Catering
                </a>

                <h5 className="card-title">Setting Your Holiday Table</h5>
                <p className="card-text">
                  From the first inquiry to final details, we are proud to
                  provide full-service catering, making you feel like a guest at
                  your own event…
                </p>
              </div>
            </div>

            <div className="card card2">
              <img
                src="https://24carrots.com/wp-content/uploads/2023/09/11.13.19-ABC-Gala-2019-Villa-Visuals-7-scaled-1-616x411.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="#" className="btn tenBtn2">
                  24 Carrots Catering featured Venues
                </a>

                <h5 className="card-title">
                  The BEST Venues for Big Holiday Bashes
                </h5>
                <p className="card-text">
                  Make the most the holiday season by thinking BIG! Invite
                  everyone from friends family, clients and the entire company
                  to join in on the fun…
                </p>
              </div>
            </div>
          </div>
          <button className="btn eighBtn">More from the blog</button>
        </section>
      </section>

      {/*  11th section start */}

      <section className="eleventhSection">
        <div className="content">
          <h1>Experiences Designed To Be Shared</h1>
          <p>Follow us for more from 24 Carrots.</p>

          <div className="links">
            <a href="">Instagram</a>
            <a href="">Pinterest</a>
          </div>
        </div>

        <div className="videos ">
          <a href="">
            <img
              src="https://media.weddingz.in/images/08d2ca8a955db6ca924191b246c56446/wedding-catering-ideas-10-signature-mocktails-recipes-to-suggest-to-your-caterers-mango-mint-iced-tea.jpg"
              alt=""
              className="firstImg"
            />
          </a>
          <a href="">
            <img
              src="https://cdn0.weddingwire.in/article/9541/original/1280/jpg/11459-wedding-photo-poses-weddingnama-one-with-the-superstar-ladies-of-the-house.jpeg"
              alt=""
              className="secondImg"
            />
          </a>
          <a href="">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQUExYUFBQWFxYYGiAcGRkZGR8fHx0fIR0YHyAgHBwcISoiHyAnHxwZJDQjJysuMTExGCI2OzYwOiowMS4BCwsLDw4PHRERHTAoIigyMDU1MDUwMDgyMjA4MjAwMjUuMzAwMDM4MDAyMDAwMjAyMDAwMDAwMDAwMDAwMDAwMP/AABEIAKkBKwMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAcBAAj/xABDEAABAgMGAwUFBQcDAwUAAAABAhEAAyEEBRIxQVEiYXEGE4GRoTKxwdHwFCNCUuEHMzRicoLxkrKzFXPSFiRDg6L/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QAMREAAgIBBAADBwQCAgMAAAAAAQIAEQMEEiExIkFRBRMyYXGBsaHB0fAjJBThM0KR/9oADAMBAAIRAxEAPwDjuceR6mI6x06aZOUWJVpFIWwickxRpdZoliPbFLxrA0FY+SmNVkGCaOYgDNwajeNORfVw9ZkMAGpGe9bHNBC5b+dPKNFmtAjb9rSfu0kOKn5Rlh2RrAmuyKyVcu7G3UJ04faEIUlAKgnMEjcEc/SH+faNB4D5QqdlkkLUrQJbzP6QbmWjaE9Rqj8IgGwjdLJk5R5RbYLZVQVmMvEwMnF9YGm2GTNClE4VDCfMMfD4wDTs2+7lnxgrUdxMpkD1jxK9wU9C48oGWG8AdfrX4wT78NyjV37hYMQ20Yuds7lx/fpqfxNkdMVNQGB5B9457Oss3vMACnenTrHYyM9Qcx8xC1b7MJMwjVXsqO3Xl8ojHq3Sw0MuFXgTs7d9oQUrSWUlTgmoJBy6Z+sdguC8O/kpWQyslDZQzHgaRzSZOXLWhMsEgpcbBlAEHkQfQx0rs/Ze7kBOpKlHkVKKm8HA8Ia0Od8rEnqL6zCmMCu4QhZ7Y2hWDu0VWrEQH0SNff4QxzpoSlSjkkEnwrHP/wDrgtFsThqkJWl9CwVXxMN6p9mMkd1E8YthDdlTh7w6hKQf7U/rCHfc5AmrK5jAkBn8qDmYYu3tuXJs6lSsXeKonCHJKsKQANY5xb7svJgpVkmAuFFRAUSdyElxXeMfR4Wdi/kLH/3mOs4UVCip6BREsq9B84wKvNSVLdKCyXSgVLktxcoV7VPtUw8RmVLAZAnZhnB66LsKBiLkmppmd+g084dyKuNbJk42LmgOJnk2ZWPiczFuT1JDD1yjoSkd3Z5Mse3hSCS9Nq7ZmA3Z648S+/U7JLITzzxGGi+EJTLkkqIZmA1Lj46QHLZTfHdIwGXbGC+04gl8uEnzEcqmAG0zkj8y/iffHW72kPLzbgNebfrHJJYw2yYv8ISpb/2pV5tF3JC36i4pgFmM/YZZNnpQ4BvV1TCnPYAxqtK3WpX4Uhh0FB5tE+y1hKbAiYaEYB/pR/5KX9CKbQGlgfmLtu1B8Yy9aP8AJz5iFxVzK5tEDdVSeW0YiX5CNt5KZk6JAHU6+sYH38BCixzGOJ7NWAkHIPFN1WOWlIUAXO9TFk80D7n3RGxLYBs99oJzsNRkfDCIp12jxSvOIJmfqflHyl+UL1KVIrV5RR3hj2ar62iGICCATqnHHjwZxqTYlFBXt7ozqTWPaAg9TyxUjueqUBEpcyIFEfaxxnA1C9lAIjTabKoYVa7wIlWhSGLUhjst8SjLYgk5ZZHfwhLKHU2Bc08WRHWiaMlItklMr7wqE3ZOtcmZsocTYZMyWhIlpQyQxyW+5IFSRu4gdZezQUgTl8SwcRf2VhqENqPh5kE0zJ6/CM3U5BQ2dwqWTyZqs0soSEhmHj4xZ3hjNLnJNASTFxMZbA3zGQZ6Q8VWyxBSWVlzaPl2lsq/X1WIplrXV2ESAV56lruZLtWqWSglx+FWvQv09IarqteJIB+qwp3vakWdILYpiyyBmSTRzskOPdGqyTliWlClFyKq+B6tDYYjx+R/WAyIDwO45d2HoWMV3hdiJ6QJhNMlDMRksNsxJoa7axrs87U5QYbTF7ZeYPua5li0plTELMoMpMwZFqsdqgONXI6vP2lMtBKqJGZ+JgBYbWAsqKqZZwTVhKVYqpao0OkaHs841Q13cW1jO7An0i/217XSO7VLlrUVDIpPC9KHcV8xCT2MtyftstNAlRUxJZ+BRy82h27Qy5FoQqzYZaeEhGEDgLUKWFDHFbdLmS5qkFISuWSnMvQs4L15QbIBlDLcBtbHRMf5N9Kn3mEKmI7uzkzMLsVYQ7ClaqHg+0ab5tc+YpSlBMtSk0wrLpcD8QDP5Rzi4LxFntUqeQ5lrClblJ9tq5lJMdHtEuapWIJZBqmvPV2IPhCmatPiCj+n1jukAyMxM5/2gtc6XNCVrClChL56Ody0MPZ2Qu0S0jFiUHdWgS/Suw6QE7R9n7WmYqauRMVKd8aEkgJzPNxWpHpD92ZvGQizy0KKZJ0Qs8TDIqoKkV0pyg2RBkVa5gw5R2hS6LMEYZYej5/W8WX8tjLQEuqnlQZ6R7ds9EyZilrStOTpIIfWoiXaaUT3bMzsXdg+5FYjOtYIbRsPf8+hjBeM9KEKKvZSh/IH35Ryyz3ctcpUwUVOWJSBviAQ1Hb20gk5YTDlfuK0PLExEx0hpUqo6zF6gbMPGAdrStNolJK2lyGwpFeMirFxUJJ/1DaFnygfF0JfToedvcYb7tUuSiz2JHEo0ITVglJJUeTiMU6XVKtEJB8TkPjAe8k2+dMK7PLRJQoFCJiiSUp/HMdQriAABqWFM4I31bCwlp+tPh7oQ1via75PFegk4UqDbTPdRisGvOIlDdd9BH0vl5wtVCPYzcheKiJaiD18SBTziizTacttTB27LEmacCg6VULUPWANssSpK1IdwCz6wXHRWvnDbh8PnNiJvntEjN5+MD5c2JhUVOOSBLZ82Bky1lzGi2zgxDh4wJmIGvrDGJOOpDNXUX73WJYNBxUaBLhWSYMX/Z3AKgxT6iAfe6CN3Byljueezk7qPUjNqYtsFmxqbSKlZQWu+7VYArfaCZH2r3BYse9pkl2YEgHLi9AflFtxVUUHJTj5e6NM+xqdKAlSS5dZFGP0YrtqEy5jIDAMR5MfUQPfuFesOE2kH0jz2OnTDKXKYnApgXdgUgh65MoAiNVuu+ZKGKpRv+Xkr4HVoE9j5S1YtAo4iSWYMwc9BDndstCZiUpONwUlvZZnqTmMw0ZGUXkIr+/KOjwrcU5NpCTTX1+cFEAqDmnWL75utMtajKDpTXoM6HUDLcdIEptZMAdTfAhkIYXCYSkaOYslKJMYkTQBXyj2dNJBAo/n4wuyE9wy+gg/u+/tOLQFh0H61hhn2KXMdK3wAVYlNA2qSCPCM/Z+yAEq2jH26vLuLKpILLm8Ceh9o/6fUiC7WyZFRfkB/MFmcJZPlMnZftAJysQSU4ThVthUVYT6ekMJvByzsBCD2AnlJmAB8Wj6Jc5a5v4QwSLcmYMSMtnD+W4hvV6c42tOopiyhwA3cZTMgnd1udKpZLYgwO0LVgtQNCYIANURmb2xvuXuMlAy0ZZOKkzUIUwLp4UhgA9KjlH3az9nCZ5M9M4omgOU4QULIyd6jIB/SCFgnBbAllDJWrbPE+0Xb6y2dZlrKlEUOFi3mY3fZ+Vcis3nM/V2Cqxf7Efs7ld0mfbEd5MWHwKbAhJJIDCilEZkuK03h2lWNEtL4QGrlkNAOlA0Ybl7SSLQgGTMSoDMZEHNik1EW3latItqMiqu5ux+ZGJGuh1MXae8BLktiCVKHDqXL5J/FllyMcwv25JzqWrvghTlQajGrb/4J0h9vW+0S/vfs5VMlrKEGaMLYaOkKyByColftqE9DFhiqAWJ5ZEh+haLYvAC7HmRktqUDiI37Or4TLnkJCgyMJlqVUsUsQ+oDvk3jDpevaCQpctRmGWykpAJHEcQBAZwTUDOjF2aOczbAmTaBMSrBLDkrOwDnLMlgPEeNHaDtKqccLzEgUSgKwJaugYmh1UczllBWU5hQPhMrjc4Tfn1P0EFpUosxBHw1hMtkpH2tKeAcVUkADImvOEv9nPaLupqlTFqYoI4gxJLMMVXSG/EdX6uItXeWmUpNQriwq0BS+YOkI6pdoox/wBn87j8o53pLCkYXZxnCbbJIluVGup+A6/WsNt5rZthC1eFlQo4lqdI0Bz6mENWR72Cw9CA1gkYjRD8KXqeZ+cQQf0EWW+e5caUHSKrJmG3zgBPFzRxCMlyYZaVTFlmSw6nP4ecLF/zscxSmYKLiC0xRwnCK6fXlCpeGMqIJLH0i2n8X2kgD3hMp7xYqkmmmfpG+7JUyaoCtSwAiiyWYqIBpuYfOy90lCgspIUzgM7DnsTvDRIZgg7MtlyLjQsZiX2OksAtcx9cmemQKaGIf+g7OfxL8x/4wx2yYAt215PkK0OfPOkRZRyEV1LHG1C/tMxcjsLJnEr+BwkeEKyjDteUozEEDPOEmYliQdDG3omtSItq1NhvWa7uspmKSnnWHu6bKCgDkIUuzRZYMOlxTxhTUZNnCntB26HlGNGgC3NFosSVIIIdqt4/J4TrVZkmYopTRLUPjt1h1tVuCeGWnvFmgSNH1UfwiF+2WQIkKIJUtShjXkHKsg/XTxhbSMy9+fUYcKexNFxYwhK0gM1Qo7UcjYt6Q12C2KmlBSMKUg4m/NkxPQP4iFa7u8EnAhgk5qOdfyjb5Q0dl5ZSnCzBQdufPrA870SZagVBrr9ZfarZ3YQTkSoHq7/EwKttzhRM2UolJzSC2HmG093TLVf8tSpKsIPCrHnkQWPoVeUCrovRSCA8RiNrZhAljjuaLNZWprsKk78zGa2W0pIShJc0c08Gg/dykd6JqGSSFBQ0U6S3Qu0ZZdgMyYZpSyQeHcnI+AP1SKlaNnmdvo1VQjdNnKZYGpzMJf7TJKlz0BICkpl1BLMSov4sEnyh/sqNEs4DAOznZ+cIsns3aZ89appMlySvECUu5HDltRjk3KD6WkO8kXFcg38GLXZK1pRNCT7TsH10y3+UGroH/uOFDEImsyS/7pbZvWLLBIkSpxTKZSwleOaC7002DtlE7stjzQUIUR3c1lbnu1Z6ZxsE35TNPoISlSjhkkkJnLlCYpBGE5lJLHn5OIIWK2EHAsMecJvbe3zJc2xzUkpWiQk1rUlTg0AIZwYb7pvUT7Mgql4cQcYvaQd0KzKFVIB68zkazSV4h0f0P8R7BnvwnsQrKWyqekLH7ULJLSlFoCXWtQTMYULJOFR2P4X1cbQctFuTIQCpyVUHMtqYDW+8AULM0CYlYbBuT7KRtVm84BpEOFge7h8i+8U/KYP2WTZImqLfeOAniUCQwBDPhI4iXZ3Ah0vntdLky8ZASCWxuCR0SWJPR2hKuWxCwrXNKsUpRThUxPdnUrIyAyB1prSGW1MmQFiQZgUAoATCgZsfZLknR6UMOuS+cVe0jv7RdF2ob79JK6DZ7YmZ3wUpNClSm4t3SoNnyasVTrpkyivu5imIP3ZYhJZnAA4czQQDu2aJU8TJaZglrSXlzE4VJIILMzKr+IbRVb77XiaWyeKuoz93KJyq9bF6lAw3WZVfkpIl8R9l9WL7DXKnLOmcKE6zg4lk0bdJUeoBNNSS3rDnLQJ60mdxpSC75EvyOXSM9pu9JK0pKikqAIJbI5PqlvwipBgmnzDGNpkZcTP4gIoJUwSXI/KoKJbkzkDmI6V2DthnJkJwOUKA6jMEPXfk4hBveYju8AJxIWUsww4QGSUlnDhIevXICOh/s8u0INmXhJUpJcYqYTiUnPKlW56wTWU2OzCaDcrPXkDHztLbwh0akNXTcwl221k5AnmaCD/aS0yZk5QUsIVkCSzjKhy84CzLoxB0KcHU1HmIx9SjDKSw4vj0hdOQFAHcF4ic6+4Rvu1IJJJyitV1TB/N6R7aiqTKUpuLINvo/vgDEP4VPcex2OTI2u8lB0ilX6xhRIKq6HPlG7s9clomJC51JeYKk8RHLItzPrBO8buEpAw4gpquzeQz0guzY2xe5OJkdtoPMp7MIld/gJClJGIClS4GW4cekN4OFfFkoFOQJctoaQh9lgn7UnFxLY4DsdyPj846HKl/eOFNTKnFlTii6oRkFeogfaSBHr5TPOS0wkl3clgKaZiL5alECjdYqmzxjIoSXybQlnasaJYWwp6xfUUchqZydTj1nlrGYhf7UXTUzUAfzge+CikKcPi6frBOzyQKKFDnDCZThbcI3kxrkTaYi3NOwqrlDSi2CWU4kgg55ePzgTfFzFClLljgFS2lY8s81UwBGbDN9Noay7ctOOvOL492PwEczoNjUkgFLNmGygZe0tPdrTstPnjEWdm5akSwlRyyrpFd7j7xaQ9VSzlSpTr9ZRjoNuUgH+3HlUtNMmQAlbigYANBe71MpEYe6Llj7X6xusqCFAnIb6wBmsziAV7mgLT3hQUhlOn3GFC8LGZUxSNRkdxofrnDlaJPEFNm0UdoLr75LpAxD2TsdjyMMYTXE4OARUWrDayIYrBb8YSCcsvr6zhQmTChRSsFKk0IOYjZYbZzgpBX6QjKHEZLPayJrsQxyJ9TtBSbOlLLd6C4IIINHzqzHrAJDTQC7LGVWfkfnGGdblpKgqmHNP19VgOxlNjkGoJ1B46mCx9lrSicsd2gpUlQCwpJSHy1dPiBDTdfZxFnQmWJ0sk0daUkYiCSzEEJLGhOmcJy5qlVJLmIKRNI4XI1wuWoasKeJyrzjWXVE8ERM6MD/wBocveyWeZPTMDTVS0YMRHC4KiShBJGasy+VBrFEm8ZkrEU4SWdlJCnapqoHYV3id3JRhFQ7VrGi77v+0LWmStBUlsTLHCDuA7OxApC7HJke/6Iyi4sac195kF5TVtiSgpLn9yGD8ykVL5vAe8LMJM1kqUshOIOcWF6EA5OHFc2UN46BZOx7IPezaKDKZIchiKEh3yr4wSsFgsshBlyZSAkuDR8T54nzfnBceIiyxoekWfMtjYLnO7ltSQFTZjlKAQU+Go1o/WLLVelnKkmSmaKMAlfBpRKQGAGwLDaDF43MZEwhCfuph4CdCzlJO+24HIwpWuxCUshKQA7NpU+gd4lWC2vnJyKXIZZqt1vX+EMopIc5tq2uUAmUokV3Udq+sF5EhE04MnyJDtuNwY9m2ApJGE6cVW298VGQKa84IY7M02G2SUyilZILc3IpkU1BcZc4E3r2gQjhQCZlVOzJBNHrnSoHIVjZaJKyCkoJJYAYal6BnLv6F4zdm7hRNxzJiXXiIZVCGJB4eZ3yi2DGhJZpfKzfCsH9jezarVOQFlKJCVcS1FiuoOBGqlKZqZDwB6eufLlKMwMO7dKQmgDDC3hlTWm4gNarEmVJNWKRQs+Ebp0oIEr/dol4gEoSAK58+b5wfKwbuRhDICFPfcqv+9DNUYCBah7JUOhI1fTnWDdhu9UxeGXLVMUdg/+OphhursAVNMnqCRTgSXP9ysh4P4QscoFkw3A4MXuz5tExaUImrAJaqqVfPzP0BHVbl7PpQhKpyu+VnxDhBehCWz5l4S0SUItCZaAUjGABU0f9I6VZSMCdsP1lHacK+Y2B1Le0UOFFCnvkzBeJLFvWFjtSs4WURiAZ9y2j6wx3pLxJPFhrCv2qZZLOCAzvU02IhNjepYwvsxfGso7B2b75dE4uE4thxEhhrQHwEPVlIMxWEOQGzAzP6aQofs9s5GOowiZU6kgO3k3nDhZ5AK1EUydlKGRfTOLpzmBHr+0j2o15m+0xTkEzgAXLOXIduQAHnG+WhTByPX5xhEhp2IZkF3Uo0ejPQaUAjalKgMx5frFcgvIbiI+ETjP2t01IprBKQhKxmK84FWaSkqCC41jZarOUlwunL5R2QC6HEeXjmbBYw2FVQQQYS5Y7m0BL+ytieT/AChkl3pMSCMClDp7jAyVda509RmAJZDhIzHNQGR6wbT2m7eeKgcniIru4wXVMISAzsSKbaZxst0oYwp6kJ6UVAy5wtMsKVUEkYhuKV2jdeEwYUqfKnqIScf5OIyvU3yk8TkCgpF6Zw1Bzim75ZVViTlSNs+7FAcRSgaFamfoMz76QAY2J4Ejwg0TU1SjiRSsaJaCAVEsgCpOXrSFi29qpVmJlpQuZM/n4U+Gqh084BWu/J89TzFunRCaJT0HxLmH8eAhdzQG0s3HU39tJomlKpUtSilLYgQCrb2tBt7oU7NbiCQQUKGaVU98NVgtL0U7atn4RqVe8uR7MgULY1jFUhwxIYOHybLlDGFwQVaXZWQjbBV03uHzYwxKlS7QjCuhyxDPN2O4hbvebJnutCEypj1UhwC9OJIcZ6gDcx5Y7xXIWETmGru4I3B2ihSuV69IUndwe5rm2I94qQiSQtDqEzGoOH4T+Ug5UfwaBIvWeZs+Wmav7t2TjBBZJBDqSaONq4oZLltM2YvvlLISXwIc0SaORuRVubxZcHZWUmZOWtSe7UqgWxXUAkVDZiioexZsfw+czs+Bx4jEe75tlmYRMsy5k5RPsYwVOSwCUMCWowGkdN7E3GiwpmzCgSjNCfusRWU4cdVEkhzi9kPlnoM6bTZbG4sskBRJdeai/M1A5BhA21XjOmGtBzO/rA8usVeE5/Erj0pfl+BG9d5GbLxpzxFKhzzz5j3wOlgklSiw2/WJ9lLB9ytRViCyCRoCCoUHPfpGj7G66h9h05ZZQBkdwGaF3IhKrNNnlCYhljFLIZla1z3HXpC7eVxol2mWFAzJcxwMRLg0oSM2dLE6dHhwkWdhVQFPHyHuiy0y5IGNSSsoBYnQkNTqBFziJF+nnKLm2mcytt3d3MJly1F1MkgE8Qc8LVdqw19mri72SJs9KyoqJSmqSkCgJAYuamu4jfM4gkAAEVFGwuD5Z+sRl2Oat0qfBQgu2uTDTLPeB48Yu3F+kjJlsUOJlmXBJUod2VpmS/xhRIS7uC7h2JpU16R9aOxEpahMCylYfiDZVYc89acoYrPYwwBBZIoNPmTEjKS+Q5UaHExADr9YuchvuJNs7OzkrIMxJQ1CxfxrmctowdmLnkrnplqBIf2a08NBnlDnaUHEzNnlk7wPuy5Ai0pnJdJJql6ZHQ82hFwS9C6sTUw5cYxMG+KuD84asklKJoRLCUpAolIA11EV2+eDjqSkFiR0jRIczi6Q3vavwgbeNAQkDiUSc9gKPz6awFw3uSR1ZiuNh7xb+UTrPJJtSApRI7wUbY6PrSOnynwJqPZHjSOaWWxlNqlqVLUkpXUmtdhoXypk8dLlkYBqwGTGHNEbYn5Rv204YptN8QReQS1a1PrCf2xmpUvhxA5UFabw3Xgo0ZL19X1hF7XAGacThY06+kIKbztGvZC+MH5Qp+zjCnvVKU5xBgd2z9Yc7unpUVENmPjzBZ2hL/Z3LQETSASsEjE1GYa+cNlinAIWtvZOjflP5q+Xzicbf7IHlz+It7SN5W+olMxH3gHEGTnvXJ1Vfk+UF5CDhHSF1M8FQwsEtQBm5+zSDveAfi9Y4uvvGuJ0anJrNJK1khLeIjeLuUlLlI95jRZk4ZbgBzm+cQnJCjhVkoZuQxgDZCx46j4UCi0yLnITmsgDRmPlr4QDvALTOMxLoKkhgS9P5uu0HpAloNEOd2r0eF7tLannFKdEgZ5Q1p+WoennOyBdwI6my5b9lJStE0lClK2dB8dPGNd5sZKzKUJiQCRhLsWO1aECAlmlS1JAUHaNMqwSwXTiSd0qIPmIIyYw+7kfiSEYrU+u2/Z6VYETCl3fC1WoxOedc4NSFlZxKNdzWBi5JNScStFFsTbOM/F41WK0hNC4619wiuchlAUSMeNlJLTb2guqZaJITJTjmYkkANsoGpybE/hGGZ2Mt0mUZikIUEhylCnUB0avgTDV2XnfeoAIIJOtPZV8oaJ1qbL6+Z5QzodrYCr+RMS1JdM1r5icesF4pLEN1Bg3LImIKHodmccw8Hrwu+zzUKliUhLYsDJCcKtwUtR2ffWOX2e+ZqHCkgKSSFCrpILFx9CsTk0bA7kMvj1IbwuI0LtUvuzJShCVCiSDRbKYu/Fi11BANchHl72SbOCHQCksnhAqpxhTxK4UmrqG8KybYaBLhfErPIq0PNgKaPrDxa7XJUxRMCFJSQxS/KhFUuWD84rlx+7ZWqEVuLEHWXvZCu7VxipBSXIGfFqFDpDHYLQhaKgKSqhB+qR9Y+zJ7iWrhlqJK1KW4PskJDnTEQ4pGGROCFlwUscK0/lV8v0gThgwaquXTIHUr3UJWO4LMFOCsbAlwOh9r6zg9ZbjkJBKQlWoLOac1O0BZU9JNCD9ekaRbsBdKwKtt4VNfrOLrmRfiA+vnAZMTN0TGKyy0hLlNDvlTk3NovmIo2FBB1ADtqPfAiz35iLTSAGb3N8fMQQs6QoYkrDdX+jGlibGyd3M/IjqeRU8MlskuXd84tTIUaroAaa+kaJJYECrbn3x8qTybYjSLECqUSn1lMqwhLsBUu5dzTrE0Yklnp5ho+VJ1AD+/rFcwFtupEUCgc1zLdyU+0g0BQrk/wAvlGdUylX8at4xQtKAXUQVbv8ATRDvH38YB7xiee4UYwOpatZd8OceSfbSeY98RJNGJH0IiVnfKA5PWFUeU02RTzlZlh5ZxgmoxEuCHmelPD/MbbCp5iyVBmy+JjEZqioAF+M0OVD5++M1j/r8+ZP5k14/tBVvwoniYCCHxKGlKkjmwPkIdVENpCpaLPinBJQ6SasR9ZtDTNdjDvspyUYH1gtUORXpAt5OSnCWJIbxMIva5f3hCxUE1/x9VENXaC04DKxKSApQTtmHdycgx01GUJ3aOYZkwJUkO5ck5NudtfCADEVzMT59Tb9jsOW9Bz8oa/Z9bh3ZlBJxOWLOCPhUkeW8NVhXwLJBYEuXO2iWILNpC92JW8giW2EDDiYAqIo77UIA5E6wfu1Su6Vm5KtC2lCQcj0ziuIf7NDyuIatw5ZqqzBSFBcwYVY0jUnkcwwHzgj/ANNJzW3h+kDLQgrmD2sRLDPn84LfZ1D/AOR4U1QG/q5ROuIozEu4BaoMQnkEsPCI2dlFZAq2cfMS2w/xFaox1VsXPjIBS6yYUO1oafT8iXbxhwmrqz5QNvGzy1klQxbMCW2yrDWkybHsyuQCuO4oSrURGyXbYIWe6pazUU00/WPLxuFCJa1pKnQkqZ6Fg8PnLjZtvnKh2UXK5dreLBaTAywS1KAZgSH6VA+MULvYJUUqBBBYxPuCTQl/+SoFkxhkWopLpUpKhqksfMQSkdo54IeYV/1VhWk25wCxYhxSL5FpcsHfpAzjYcSdyPyajjJ7RJFSgPygbfBkWlYmTJKcTM6XSSOZBr8IFTCQGLvsaR7LnNnT63ife5fWR/x8XYELWSwWZCQBISADQk4iDvxF/GL1qXLLyglQb8KQCKg5FzmAaPlAmXaf6vOL8RPsKD7Et/iBnI5Pik+5UDiElSbVNT95wuXJmHbJkqIDQVurs5MXZ0pnKR3mI93MSSr7rRMwkDEASWYZMxgHY7euaoSl8K/wk5uPRWWXk0PNntqVhPdsAQc8wzs28MIytYb/AL+0z8gdGsRJvW6Z0l1qBIH45eg/mSWp9PF11SpikhWALQqtR7QDghjQ1aHVKQyQsDMjzy+UfSbpEsjCSyTRH4fAaFnyaBNpw97YQaogU0SliYhRMolI/KsKZupy9fCC1yz5zpU0svUgFTAjJ6AHejwzqkB6abZjzjPNSlJcjFuGY9XyijY8mNeDI98H4qbbLbCAygcW4A/SJ/beaydmA66xklWpNGSRR2yz5RIWpicKXFGc5b9YcxO4Uc3FWQE9S9cwEVxdIrCUcx1Bis2tewHhFM2b+ZXhBSwPMkKZoVKl6qEQUuXkkEn0jGVvQCPfA/D0il10BLV85dMVEFmItFa84Dl6hFm+7QXWQAxHics+XzgbZ55GGgYqVln7Rgjdp9rkNoDJl1DaqBCtNKsT6ekZ2pG3APqZy/GZAFRnpCQQSrNnpq3Nob7UrhMKiFFVolpJd1ZihhntPs1f68IZ9lWMbGD1PxLAV9WVCwnE6ik4gl9QKRzrtJOxzTqcqa/HWH69FgmgOIP7vWEG95KSsqZi45HKpby8oX0+Uu7Fj5z0PslFRWIEaewtlIsyk5AnMnMkkn1duTQw2JR7pUvCpQcmoSUkOAwdnPygV2YsXd2d1LfFWoDB6084MIcWf2swpiCUsCeYIxA5dOsdpvHqGa/I/mYuoPf1gK7V/eKKEhPF7PDnT8pOdCX1gyqQs7QHsMwBQVhwqOQNSXZsR1VQP8YLqmTPyGE9SQchu5ZbEVLoatMw5iakORhNIlYWxUFWIjwggtSIY+ImOsRXHEz29SUDGos7JHU0EZkqCQCdS3ygd2qUsghJoOLxH6bRCxTSqWVKOMFCTm1fhUQ6mH/GGuVTaX2sfSbLqkL7zCoUqSoNTOrbZwSvQSFypqJM3vGQUq4SA+E5EgOHpGW7LQpAUr8SpSwAaVwsanmYosVqQlBz4nd/7mHvix9a5uQUYkj8VUWrmmUSrNketB73rzMap1hQpLKQCcydX6iMlwAFIFOnIYYMyCMVdTD2dirkiL4lDLzL7qu2WspR3bnDkHFXbSMHaezy7NJkqQgmZMIVj4sKAGLZsVEkVbQwdushExSsTBIGrNmXeAnbGaqe0uWUqSFOkAHFUkU0w84ppXByENf7TtQprwwPNvWdNHFMUR1jNLtkxJZ8Q2P08fTrtElxMUoLI4UJNS+RKqgAF6NWjatGWlYSkqT7Tsrdmfm9R5w+VXyi4cih1CVlvMgHgWGzao8Y1IvBC6DCT/pL8jFN1WG0zQO5X3bnCpWVKe7bpDrdV12XvkyVSpUxOArXMmELUcFDRTqH9oaukJ5AgYKOz/eYYZ3F30JCxmQZUurqYDIglQbIZKU+ofON13W3DMIEwLwHCsKpMGKtBksMQd+GmsVSOzyFcYRgSpWJKEkhKWNAEgsD5bwVsFyywrEJXEzYlCp8TWFxg2PYJuQ2UEdQupYUnQkZa1Gn1vF5tBKHGlfcW8oxWO7ACqjBZdVSx+so2GQ2WUaKE1dVE2rqWTlJoXd4gbQAKgnpHqJQjWmfowAEE27pUmoOnWyXLJxBgA7nTkddYsVM4cQTQmkWW2xy5hBWlyGY7EVB6jfmYjNspYYTQRKYRfchshqBbsvNcy0LlrZISCwap4mBfFsDprozQQVKBiuy2BKJgKUhJALsM6NG1aBHKhUU07dZ4mMIixKdjX3x4oVj1DEEGmxim2EuRWIomGsWzlkUV5xRMScxUcoWy9QqTRY5pAW35YCWNlJQOLSmZyc5k89tqNGu1Wru5a1F/Zb3cxA2w2glCCFVYPq1Kmh6xm6k3hr0/mXAp7myxhBtksDPEaaUCnhptauH5QmXUQbXKGMK4nAyNATm/pDdb1cAqPo+MN+zxtwMf71A6jlxANsmLMxKRRRNCBlz8oWu0VnSm04AlNUFT9FJ0y1g+o/fIClcL5u2hb1aBd/WNCl94kkFiHfIch9ZRkYGAaz53HwWWtphe6rI0hlKcsC+lQ9IJhBTZwz5MSQoAgl6AE12U0UIRLRKAQGSGABfQBn1y3idpUkyE4WyPOgxcOYNN4a0Nb3PnX7xXKSQPrAVhQpU1BUXUk0YKAICtQSx69cqwdmLLmv15Qv2KclE9INFl8KaOQCxLAl3caeTwcnWlQJASKfyiFtRe7mFUXF6avCGFN2jGhTqJjTMRQqUGPujPYhjWWIwpST1P08XC+gjCtQME3rZ3UtSn7saCu8ZLlQRKS1QMQbk5HxGcG7TIUpFCz8vfGXs7YsSlyuF8WT0Y7HzhvHk3Yyv0hAqhSfl6fvCP2cJAxUKbPMUa5BQy/21gOhWGWqrtoMq5e5/GGO/VrRNnqMspBl4EgjNBMtLjagMLV4SilKgHYhxTZ3rtFq52/P95XYaBvj6+dQD2eXwg8q//kfKC1mDqgP2dIEpzkDX008oJ2e2AZAtzhvUqSxqL6dgFFwuLSqXLWtCELViACVpCkmqUnECGNHMH7muZNr4psuVKAFZcnEGXoU5MGrXPE3VOsl+slQARTXEXqc2b0jZdt+lBFoQhS+5xAKLpSAujbk8KQCaZCjx2nDY+GHF/friUzhX5U8zdP7EolzF4iFNTEokAgAMSxd9DXTQNGA9llrKQuaEBJw4QHCUv+EqUNaEsTkS8ELF24XOVwol1L60cnLJ3KsvGM/aG1KmcAWwIckMNQ4oHLilC+sc709C5ynw89wtMu1OASkIZGGhBZvh4n5wDskoSLTLkyiSVkhSyoElGEuKUYs0NNzWbFKxzlABCQcJJSw0Kt3AcCsKEgA28T0KxIxYwKpwhQIAIIckAgNygWlXILZzYk5XT4VE6FZJvdpYglJ+j46jd2gvhcAjwMDLMpwBvGuyTQPu9FFk8jtGggqJNCMpNH3j0piYpTakQIgxEpPMMfBMevHoiKkXPgHG0VBwIvMQmisTVTgblYSCA/hHhREichFFsnKQnGA+GqhunVuYz9NYktYnAUZHu96RHAPONEuYmYkKSXB+mMQTZ3ypFak3MZoMK6jeKJsopqk0jZMS1FRmmIKTw5bQvkSHRoIv9YNnmUDgChyzEKFxLT3k1xhACQClVGKlE0GuImtesOPaMpNnnHCSyCcIFSwekc9uVCkTisqMtJSXTNSQU1DJIOh0V18UPdko4hiw4jpKmtapZMtOF2CiAXcEV8T6w021f3aVPmx8CcgMw3wjn0+2JE2UogkFSThpxV0fSHM3iFoAwYcLCoofEaO9eUBwv7vGwJ8jUpkXcVIg81nJwM4ORdtaty+UUXilImpUU8QIIFWUXDAeOkeypy1z04QAUuS+WHI5dYneWMrSADiKkgEmjuGMZqggiNecL3lN4OIN4/KKr/WhFnZSwBhAGJQqFAhhiTUl8s+JojfMxkgKybOKr7sksyAgS3S4JxkpUCEhQUgqB1AyLP0h3QHlj9Ivl6EF3JYEJWlhjXL9lSzjUHd+I8RDFoNzFrc5wGu20qTOPCQVCjkE9KZGCap+4U+tIT1hYv3CJ1OZ2C+Z0xCscz2lZBID9WD5w5di7GVSZy0OpkUejqILCtNdY55c37r+4/7RD72Y/gJ/QfCN7KoDH7/iEbjCD84Qn3TMSGUhh1HwMCrFLEqeVYjiwYkOHqCR0di7naNCIy2z94j+k/CMpDTGobGN5AM9mz8EmcylJokBQzZSsg9ScsoG3pOV3JUpRfAQcTsA1RXaNl5fu0/1o/3QMv39x/ar3wzi52/WHyYeGN88/iA7tKUySkfimkCmwB+HpDN2Sscta1d6nEnAaU5AZ8zCxZP3f/2rhr7K+2Og98aGX4x9ZlL/AOM/SYxdEoWhaUyQzqwuXxYSAoMtTAODU6b5Qz2GSEylhDA1ALAIFCycg7EtTnkxhdk/xNq6n/kTDJcn7qV1l/8AEmAZyd3cZxIuzqKl/wBmlyJkqYgd2tbvLDq4wUthSn81CwbMUhruzsyiYBMmvjXhKk4WcCuFRNWycUyhct38ZZP+6r3GH6wfD5QrrM7KFrzB/MWHxGWAJolAQ4BISKMP6W31aL5dzyUEzFIQFrHEyQCQHp6wK7JfxNo8P90yCl45/W8cqDFg98eSfI9dyrnxUJgsCqFOxI50166+cEbNMAUFKq2o+I3gXJ/eK/q+KY3y81dRGrgcsgJ9IF+4Yl2pByUPGkW4YApyV1jZdmfj8IYBlCKEItHoTHsfReUuRMeTjrH2sfT8vCObqQvcpJ12ibOIrEWSoGIQwbWSSoexmRtu/i5fSCMucFAFMVq+cZrr16xYSJfOUFCB8yZhbaNysz1gdbPZ84C/UIncy2iYEkKcBjn5R5ajJmhImS0zScgsA56VjyRp0V/tMYLm9pP9Pyjz+stX3AxxBI3h2VUf3U1KUhmSpJJG4C8T7NSNcyyzAo95iKaNhSw8SA5b4mCtm9hPX4xdadYXOVmTmdXMUpGFNoBUshLFs/aOh5M9OkW2Wz47QMUwKQ5U2RoC1X3byjLL/iVf0qid3fxKf6Fxb+JYw7epIY9G5GJX6lSUDCkZFwzBqOAAcFCOnrHl9exGPtr7I/7g/wCNUNaD4X+0Bl7WCbutYlzHZRo+Ig4chUPkM6CCv2p64xXn+kAbvyH9CfdGWdmYHmxhshhU6n//2Q=="
              alt=""
              className="thirdImg"
            />
          </a>
        </div>
      </section>

      {/* 12TH SECTION START */}
      <section className="twelvethSection">
        <div className="row">
          <div className="col-md-6 content">
            <h1>Endless Inspiration</h1>
            <p>
              Sign up to our newsletter for fresh updates, encouragement, and
              exclusive insights.
            </p>

            <div className="inputGroup">
              <input
                type="text"
                className="emailInput"
                placeholder="Enter Your Email"
              />
              <button className="btn formBtn">Sign Up</button>
            </div>

            <p  style={{fontSize:"13px",marginTop:"20px",letterSpacing:"1px"}}>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions</p>
          </div>

          <div className="col-md-6 img">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqz7pBf7jF--cEEFQZB0lNQmb5YCSfzRakl7HKtpyhdvLCM9Y_"
              alt=""
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
