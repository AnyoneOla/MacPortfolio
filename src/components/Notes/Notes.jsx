import Window from "../Window/Window";

export default function Notes(){

    return (
        <Window appName={'Notes'} content={<>
    <div style={{width:'100%', height:'calc(100% - 30px)', background:'white', marginTop:'8px', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px', cursor:'default', color:'black', position:'absolute', bottom:'0px'}}>
        <div style={{position:'absolute', height:'100%', width:'300px', background:'rgb(240,240,240)', borderBottomLeftRadius:'10px', borderRight:'0.8px solid rgb(200,200,200)'}}>
            <div style={{height:'50px', wodth:'250px', background:'rgb(255,190,50)', margin:'5px', borderRadius:'8px', border:'1px solid rgb(255,180,100)'}}>
                <div style={{margin:'13px', marginLeft:'20px', fontWeight:'500'}}>
                    About Me
                </div>
            </div>
        </div>
        <div style={{position:'absolute', marginLeft:'320px', marginTop:'20px', marginRight:'20px', textAlign:'justify', overflow:'scroll', height:'96%'}}>
            <h1>Hey there!👋</h1>
            <br />
            <h4>I am Jeet Joshi, Welcome to my Portfolio.</h4>
            <br />
            <h4>💻 "I'm handing over my Mac to you so you can dive in and explore all the projects on your own!" 🎉</h4>
            <br />
            <div>Talking a bit about Myself 👨🏼‍💻,</div>
            <br />
            <div>
                <div>
                    🚀 Driven by a passion for technology and creativity, I specialize in developing innovative solutions that bridge the gap between cutting-edge tech and practical application. With 1.5 years of hands-on experience in the Metaverse Continuum Business Group at Accenture, I bring a proven track record of excellence, leadership, and continuous learning.
                </div>
                <br />
                <div>
                    💡 My expertise spans AI and web development, where I am constantly exploring the latest advancements to enhance my skill set. This dedication ensures I remain at the forefront of technological trends, seamlessly integrating new methodologies into my work.
                </div>
                <br />
                <div>
                    🌟 I am eager to continue my career journey, leveraging my skills to innovate, lead, and make a meaningful impact in the tech industry.
                </div>
                <br />
                <div>
                    <b>✅ Technical Skills:</b>
                </div>
                <div>
                    Programming Languages: HTML, CSS, JavaScript, Python
                </div>
                <div>
                    Frameworks & Libraries: ReactJS, ExpressJS, NodeJS
                </div>
                <div>
                    Databases: MongoDB, Firebase
                </div>
                <div>
                    Specialties: Web Development, AI, Data Structures & Algorithms (DSA)
                </div>
                <br />
                <div>
                    <b>✨ Personal Interests:</b>
                </div>
                <div>
                    Outside of work, I am passionate about exploring new technologies, participating in hackathons, and contributing to open-source projects. I believe in the power of community and continuous learning.
                </div>
                <br />
                <div>
                    <b>🎓 Schooling:</b>
                </div>
                <div>
                    I have completed my bachelors degree at L.D. College of Engineering in 2022. 
                    <div><h5>(9.35 CGPA)</h5></div>
                </div>
                <br />
                <div>
                    <b>☎️ Contact Me:</b>
                </div>
                <div>
                    <b>• Email:</b> jeetjoshi2000@gmail.com
                </div>
                <div>
                    <b>• Github:</b> @JeetJoshi
                </div>
                <div>
                    <b>• Linkedin:</b> @jeet-joshi
                </div>
                <div>
                    <b>• X:</b> @jeet-joshi
                </div>
                <div>
                    <b>• Resume:</b> Click Here to Download
                </div>
            </div>           
        </div>
    </div></>} />
    )
}