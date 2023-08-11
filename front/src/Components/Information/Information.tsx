import React, { FC } from 'react';
import { InformationComponentInterface } from './interface';
import profile_picture from './../../Assets/profile-picture.png'
import style from './style.module.css'
import classNames from 'classnames';

export const Information: FC<InformationComponentInterface> = () => {

    return <div className={style.informationContent}>
        <div>
            <form className="pure-form">
                <fieldset>
                    <div>
                        <legend className={style.legendText}>Personal Information</legend>
                        <div className='pure-u-18-24'>
                            <div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='firstName'>First Name</label>
                                    <input type="text" className='pure-u-20-24' id="firstName" placeholder="Peter" />
                                </div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='lastName'>Last Name</label>
                                    <input type="text" className='pure-u-20-24' id="lastName" placeholder="Peter" />
                                </div>
                            </div>
                            <div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='city'>City</label>
                                    <input type="text" className='pure-u-20-24' id="city" placeholder="London" />
                                </div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='postalCode'>Postal Code</label>
                                    <input type="text" className='pure-u-20-24' id="postalCode" placeholder="E2 4XF" />
                                </div>
                            </div>
                            <div>
                                <div className='pure-u-24-24'>
                                    <label htmlFor='adress'>Adress</label>
                                    <input type="text" className='pure-u-22-24' id="adress" placeholder="123 Example" />
                                </div>
                            </div>
                            <div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" className='pure-u-20-24' id="email" placeholder="petter@gmail.com" />
                                </div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='phone'>Phone</label>
                                    <input type="tel" className='pure-u-20-24' id="phone" placeholder="+442223334444" />
                                </div>
                            </div>
                            <div>
                                <div className='pure-u-12-24'>
                                    <label htmlFor='password'>Password</label>
                                    <input type="password" className='pure-u-20-24' id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div>
                                <p>Use this email to log in to your <a href="#" className={style.primary}>resumedone.io</a> account and receive notifications.</p>
                            </div>
                            <div>
                                <button className='pure-u-8-24 pure-button pure-button-primary button-large'>Save</button>
                            </div>
                        </div>
                        <div className='pure-u-6-24'>
                            <img className={style.profilePictureInformation} src={profile_picture} alt="Profile picture" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>

        <div>
            <label htmlFor='check'>            
                <input type="checkbox" id="check" />
                Show my profile to serious employers on <a href="#" className={style.primary}>hirethesbest.io</a> for free
            </label>
        </div>

        <div className={style.deleteContent}>
            <p className={style.deleteContentTitle}>Delete Account</p>
            <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
            <a href="#" className={style.error}>Yes, Delete my account</a>
        </div>

        <div>
            <p>
                <a href="#" className={style.primary}>Get in touch with our support team</a> if you have any question or want to leave some feedback.
We’ll be happy to hear from you.</p>
        </div>

        <div className={classNames('pure-menu pure-menu-horizontal', style.footerContent)}>
            <ul  className="pure-menu-list pure-u-g">
                <li className='pure-menu-item'>
                    <a href="#" className='pure-menu-link'>Terms & Conditions</a>
                </li>
                <li className='pure-menu-item'>
                    <a href="#" className='pure-menu-link'>Privacy Policy</a>
                </li>
                <li className='pure-menu-item'>
                    <a href="#" className='pure-menu-link'>FAQ</a>
                </li>
                <li className='pure-menu-item'>
                    <a href="#" className='pure-menu-link'>Contact Us</a>
                </li>
            </ul>
        </div>

    </div>

}
