import { AiFillFacebook,AiFillYoutube,AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  bg-white mt-10 ">

                <div>
                    <img className=" w-52 h-52 rounded-full" src="https://i.ibb.co/6R4sfpq/4458381-74.jpg" alt="" />
                    <p className=" text-xl text-black font-bold" >Marriage Management <br />Providing reliable tech since 2023</p>
                </div>

                <div>
                    <h2 className=" text-6xl text-black mt-20 font-bold " >Social</h2>
                    <div className=" grid grid-cols-3 lg:grid-cols-3 gap-3 text-4xl" >
                        <a href="https://www.facebook.com/mdjahid.hossain.16547/"> <AiFillFacebook></AiFillFacebook>  </a>
                        <a href="https://www.youtube.com/channel/UC8hn44uveUIw5fGKPwF4FAg"> <AiFillYoutube></AiFillYoutube>  </a>
                        <a href="">  <AiFillTwitterCircle></AiFillTwitterCircle>  </a>
                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer; 