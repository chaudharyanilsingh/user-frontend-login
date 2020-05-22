import React from 'react'
import './SocialSignup.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, GITHUB_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import googleLogo from '../../img/google-logo.png';
import githubLogo from '../../img/github-logo.png';
function SocialSignup(){
    return(
        <div class="flex-c-m">
						<a href={FACEBOOK_AUTH_URL} class="login100-social-item">
							<i class="fa fa-facebook"></i>
						</a>

						<a href={GOOGLE_AUTH_URL} class="login100-social-item">
                        <img src={googleLogo} alt="Google" />
						</a>

						<a href={GITHUB_AUTH_URL} class="login100-social-item">
                        <img src={githubLogo} alt="Github" />
						</a>
            </div>
    
    
	)
}
export default SocialSignup