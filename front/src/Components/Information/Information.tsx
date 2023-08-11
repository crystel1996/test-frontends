import React, { FC } from 'react';
import { InformationComponentInterface } from './interface';
import profile_picture from './../../Assets/profile-picture.png'
import style from './style.module.css'

export const Information: FC<InformationComponentInterface> = () => {

    return <div>
        <form className="pure-form">
            <fieldset>
                <legend className={style.legendText}>Personal Information</legend>
                <div className='pure-u-12-24'>
                    <div className='pure-u-g'>
                        <div>
                            <label htmlFor='firstName'>First Name</label>
                            <input type="text" id="firstName" placeholder="Peter" />
                        </div>
                        <div>
                            <label htmlFor='lastName'>Last Name</label>
                            <input type="text" id="lastName" placeholder="Peter" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='city'>City</label>
                            <input type="text" id="city" placeholder="London" />
                        </div>
                        <div>
                            <label htmlFor='postalCode'>Postal Code</label>
                            <input type="text" id="postalCode" placeholder="E2 4XF" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='adress'>Adress</label>
                            <input type="text" id="adress" placeholder="123 Example" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="email" id="email" placeholder="petter@gmail.com" />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type="password" id="password" placeholder="Password" />
                        </div>
                    </div>
                    <div>
                        <p>Use this email to log in to your <span className={style.primary}>resumedone.io</span> account and receive notifications.</p>
                    </div>
                    <div>
                        <button className='pure-button pure-button-primary button-large'>Save</button>
                    </div>
                </div>
                <div className='pure-u-12-24'>
                    <img className={style.profilePictureInformation} src={profile_picture} alt="Profile picture" />
                </div>
            </fieldset>
        </form>

        <div>
            <label htmlFor='check'>            
                <input type="checkbox" id="check" />
                Show my profile to serious employers on <span className={style.primary}>hirethesbest.io</span> for free
            </label>
        </div>

        <div>
            <p>Delete Account</p>
            <p>If you delete your account you’ll be permanently removing it from our systems - you can’t undo it.</p>
            <p className={style.error}>Yes, Delete my account</p>
        </div>

        <div>
            <p>
                <span className={style.primary}>Get in touch with our support team</span> if you have any question or want to leave some feedback.
We’ll be happy to hear from you.</p>
        </div>

    </div>

}
