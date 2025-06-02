import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
    <footer>
       <div className="bg-gray-900 px-6 py-10 ">
        <div className="flex text-white justify-between">
            <div>
               <p className="font-bold py-1"><Link>JobFinder</Link></p>
               <p className="text-gray-400 py-1"><Link>Connecting talent with opportunity</Link></p>
            </div>
            <div>
                <p className="font-bold py-1"><Link>For Job Seekers</Link></p>
                <p className="text-gray-400 py-1"><Link>Browser Jobs</Link></p>
                <p className="text-gray-400 py-1"><Link>Career Resources</Link></p>
            </div>
            <div>
                 <p className="font-bold py-1"><Link>For Employers</Link></p>
                 <p className="text-gray-400 py-1"><Link>Post a Job</Link></p>
                 <p className="text-gray-400 py-1"><Link>Find Candidates</Link></p>
            </div>
            <div>
                 <p className="font-bold py-1"><Link>Company</Link></p>
                 <p className="text-gray-400 py-1"><Link>About Us</Link></p>
                 <p className="text-gray-400 py-1"><Link>Contact</Link></p>
                 <p className="text-gray-400 py-1"><Link>Privacy Policy</Link></p>
            </div>
        </div>
        <p className="border-b border-b-gray-600 pb-1 pt-1"></p>
        <div className="mt-5 text-center text-gray-500 text-sm">
            <Link>© 2025 JobFinder. All rights reserved</Link>
        </div>
       </div>
       </footer>
    )
}
export default Footer;