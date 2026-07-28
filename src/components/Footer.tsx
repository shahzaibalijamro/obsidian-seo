export default function Footer() {
    return (
        <footer className="bg-surface border-t border-line-subtle w-full pt-section-padding-mobile pb-[40px] sm:py-section-padding">
            <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                <div className="grid text-center md:text-left grid-cols-1 md:grid-cols-4 gap-gutter mb-16">

                    <div className="flex flex-col items-center md:items-start">
                        <a className="font-display-lg text-2xl sm:text-headline-md font-bold text-on-surface block mb-6 tracking-tighter"
                            href="#">OBSIDIAN</a>
                        <p className="font-body-md text-on-surface-variant mb-8 text-sm max-w-xs">Engineering digital dominance
                            through uncompromising artistry and logic.</p>
                        <div className="flex gap-4">
                            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">work</span>
                            </a>
                            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">close</span>
                            </a>
                            <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                                <span className="material-symbols-outlined">photo_camera</span>
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <p className="font-label-md text-on-surface mb-2 uppercase tracking-wider">Services</p>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/seo">Search Engine Optimization</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/sem">Search Engine Marketing</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/social-media-marketing">Social Media Marketing</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/content-marketing">Content Marketing</a>



                    </div>

                    <div className="flex flex-col space-y-4">
                        <p className="font-label-md sm:block hidden text-on-surface mb-2 uppercase tracking-wider"><br /></p>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/software-development">Software Development</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/app-development">App Development</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/ai-integration">AI Integration</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/services/social-media-management">Social Media Management</a>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <p className="font-label-md sm:hidden block text-on-surface mb-2 uppercase tracking-wider"><br /></p>

                        <p className="font-label-md text-on-surface mb-2 uppercase tracking-wider">company</p>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/about">About Us</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/blogs">Blog</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/case-studies">Case Studies</a>
                        <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors duration-300"
                            href="/contact">Contact Us</a>
                    </div>
                </div>

                <div className="pt-8 border-t border-line-subtle">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="font-body-md text-on-surface-variant text-sm text-center md:text-left">Â© 2026 OBSIDIAN,
                            All rights reserved.</p>
                        <div className="flex gap-6"><a href="/privacy"
                            className="font-body-md text-on-surface-variant text-sm hover:text-primary transition-colors duration-300">Privacy
                            Policy</a><a href="/terms"
                                className="font-body-md text-on-surface-variant text-sm hover:text-primary transition-colors duration-300">Terms
                                &amp; Conditions</a></div>
                    </div>
                </div>
            </div>
        </footer>
    );
}