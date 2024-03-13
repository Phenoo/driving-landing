import React from "react";
import Logo from "./common/Logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Twitter, X } from "lucide-react";

const Footer = () => {
  const footerItems = [
    {
      title: "About Us",
      links: [
        { name: "Our Story", url: "/about" },
        { name: "Blogs", url: "/blogs" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { name: "About us", url: "/about" },
        { name: "Projects", url: "/projects" },
        { name: "Services", url: "/services" },
        { name: "Contact Us", url: "/contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <br />
            <div className="space-y-2">
              <p className="text-sm">
                Phone <span className="text-[#c7c7c7]">+123 7844 464</span>
              </p>
              <p className="text-sm">
                Email <span className="text-[#c7c7c7]">johndoe@gmail.com</span>
              </p>
              <p className="text-sm">
                Address{" "}
                <span className="text-[#c7c7c7]">
                  1655 Phetchaburi Rd, Makkasan, Ratchathewi, Bangkok 10400,
                  Thailand
                </span>
              </p>
            </div>
          </div>
          {footerItems.map((item, i) => (
            <div key={i}>
              <h4 className=" mb-4 font-semibold">{item.title}</h4>
              <ul className="space-y-3">
                {item.links.map((link, i) => (
                  <li key={i + item.title}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 font-semibold">Newsletter</h4>
            <div className="flex gap-4">
              <Input
                placeholder="email address"
                className="bg-transparent border-primary text-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="my-4">
          <p className="text-[#c7c7c7]">Follow Us On:</p>
          <div className="flex items-center gap-4 my-1">
            <div className="hover:bg-primary transition-all hover:text-black text-primary border-primary border rounded-3xl p-2 cursor-pointer hover:scale-95">
              <Twitter />
            </div>
            <div className="hover:bg-primary transition-all hover:text-black text-primary border-primary border rounded-3xl p-2 cursor-pointer hover:scale-95">
              <Linkedin />
            </div>
            <div className="hover:bg-primary transition-all hover:text-black text-primary border-primary border rounded-3xl p-2 cursor-pointer hover:scale-95">
              <Instagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
