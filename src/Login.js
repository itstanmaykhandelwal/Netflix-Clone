import styled from 'styled-components'
import './Login.css'
import Section from './Section'
const Login = (props) => {
    return(
        <>
            <Container>
            <Content>
                <CTA>
                    <SignUp>Unlimited Movies,TV shows and more</SignUp>
                    <Description>
                        Watch anywhere. Cancel anytime.
                    </Description>
                    <MemberDesc>Ready to watch? Enter your email to create or restart your membership.</MemberDesc>
                    <Input>
                        <div className="box">
                            <input type="text" placeholder="Email address" />
                            <button className="button">Get Started</button>
                        </div>
                    </Input>
                </CTA>
                <BgImage/>
            </Content>
        </Container>
        <Section/>
        </>
        
    )
}

const Container = styled.div `
    overflow:hidden;
    display: flex;
    flex-direction:column;
    text-align:center;
    height:90vh;
`
const Content = styled.div `
    margin-bottom:10vw;
    width:100%;
    position:absolute;
    min-height:100vh;
    box-sizing:border-box;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding:80px 40px;
    height:100%;
`

const BgImage = styled.div `
    height: 90%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("https://i.pinimg.com/originals/df/36/22/df36227e94aadd202bcd3a9dd7cc6c5c.jpg");
    filter: brightness(70%);
    box-shadow: inset 120px 100px 250px #000000 ,inset -120px -100px 250px #000000;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index:-1;
`
const CTA = styled.div `
    max-width:600px;
    width:100%;
    display:flex;
    flex-direction:column;
`
const SignUp = styled.h3`
    font-weight:bold;
    color:#f9f9f9;
    ${'' /* background-color:#0063e5; */}
    margin-bottom:12px;
    width:100%;
    letter-spacing:1.5px;
    font-size:50px;
    padding:16.5px 0;
    border:1px solid transparent;
    border-radius:4px;
    cursor:pointer;
`
const Description = styled.p `
    font-size:27px;
    margin: 0 0 24px;
    line-height:1.5;
    letter-spacing:1.5px;
    color:white;
`
const MemberDesc = styled.p `
    font-size:15px;
    width:100%;
    margin: 0 0 28px;
    line-height:1.5;
    letter-spacing:1.5px;
    color:white;
`

const Input = styled.div `
    display:flex;
    fontsize:20px;
   input{
       width:100%;
       padding:15px;

       button{
            margin:20px;
       }
    }
`

export default Login;