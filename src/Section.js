import React from 'react'
import styled from 'styled-components'
import './Section.css'


const Section = () => {
    return (
        <>
            <hr className="hr1" />
            <div className="container section">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row align-items-center h-100">
                            <div className="col">
                                <h1 className="display-4 font-weight-bolder w-100">Enjoy on your TV.</h1>
                                <p className="lead">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img alt="" className="w-100" src="./images/tab2.png" data-uia="our-story-card-img" />
                    </div>
                </div>
            </div>

            <hr className="hr1" />

            <div className="container section mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img alt="" className="w-100" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img"></img>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center h-100">
                            <div className="col">
                                <h1 className="display-4 font-weight-bolder w-100">Download your shows to watch offline.</h1>
                                <p className="lead">Save your favorites easily and always have something to watch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <hr className="hr1" />

            <div className="container section mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row align-items-center h-100">
                            <div className="col">
                                <h1 className="display-4 font-weight-bolder w-100">Watch everywhere.</h1>
                                <p className="lead">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">  
                        <img alt="" className="w-100" src="https://o.remove.bg/downloads/0289dc4e-b934-47f9-a663-55a8b8d9889b/netflix-devices-pile-retina-removebg-preview.png" data-uia="our-story-card-img"></img>
                    </div>
                </div>
            </div>  

            <hr className="hr1" />

            <div className="container section mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img alt="" className="w-100" src="https://occ-0-2186-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf" data-uia="our-story-card-img"></img>
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center h-100">
                            <div className="col">
                                <h1 className="display-4 font-weight-bolder w-100">Create profiles for children.</h1>
                                <p className="lead">Send children on adventures with their favorite characters in a space made just for them—free with your membership.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="hr1" />

            <div className="container" style={{padding:"100px"}}>
    
                <div className="faq text-center text-white">
                    <h1>Frequently Asked Question</h1>
                </div>
                
                <div className="faq-drawer mt-5">
                    <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer">What is Netflix? </label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                            </p>
                        </div>
                    </div>
                </div>         
                <div className="faq-drawer">
                    <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer-2">How Much does Netflix cost?</label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 199 to ₹ 799 a month. No extra costs, no contracts.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-drawer">
                    <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer-3">Where can i watch</label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-drawer">
                    <input className="faq-drawer__trigger" id="faq-drawer-4" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer-4">How do i cancel</label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-drawer">
                    <input className="faq-drawer__trigger" id="faq-drawer-5" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer-5">What can i watch on Netflix</label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="faq-drawer">
                    <input className="faq-drawer__trigger" id="faq-drawer-6" type="checkbox" />
                    <label className="faq-drawer__title" for="faq-drawer-6">Is Netflix good for kids?</label>
                    <div className="faq-drawer__content-wrapper">
                        <div className="faq-drawer__content text-white p-4">
                            <p>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mail text-center text-white mt-3">
                <h5 >Ready to watch? Enter your email to create or restart your membership.</h5>
                <Input>
                    <div className="box mt-4">
                        <input type="text" placeholder="Email address" />
                        <button className="button">Get Started</button>
                    </div>
                </Input>
                </div> 
            </div>
            <footer className="footer">
			<p>Questions? Call 000-800-040-1843</p>
			<div className="footer-cols">
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Investor Relations</a></li>
					<li><a href="#">Ways To Watch</a></li>
					<li><a href="#">Corporate Information</a></li>
					<li><a href="#">Netflix Originals</a></li>
				</ul>
				<ul>
					<li><a href="#">Help Center</a></li>
					<li><a href="#">Jobs</a></li>
					<li><a href="#">Terms Of Use</a></li>
					<li><a href="#">Contact Us</a></li>
				</ul>
				<ul>
					<li><a href="#">Account</a></li>
					<li><a href="#">Redeem Gift Cards</a></li>
					<li><a href="#">Privacy</a></li>
					<li><a href="#">Speed Test</a></li>
				</ul>
				<ul>
					<li><a href="#">Media Center</a></li>
					<li><a href="#">Buy Gift Cards</a></li>
					<li><a href="#">Cookie Preferences</a></li>
					<li><a href="#">Legal Notices</a></li>
				</ul>
			</div>

		</footer>
        </>
    )
}

const Input = styled.div `
    display:flex;
    fontsize:20px;
    padding: 0 70px 0 70px;
   input{
       width:100%;
       padding:15px;

       button{
            margin:20px;
       }
    }
`

export default Section
