export default function BlogSection() {
    return (
        <>

            <section className="py-section-padding-mobile sm:py-section-padding-mobile sm:py-section-padding">
                <div className="max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="font-display-lg text-headline-lg-mobile sm:text-headline-lg text-on-surface">Insights &amp; Resources
                        </h2>
                        <a className="hidden md:flex font-label-md text-primary items-center gap-2 hover:text-on-surface transition-colors"
                            href="#">Read Journal <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8iCeTLqlejqKHgRe322p0IRiS9EcdlNJ_YxwfrF3qWmJ9YDhIGq-E_WtYKgAbdFu-EvSvP6BxcPNHbKfCU4o68CANTK_PzmijF2--P9LG_3E-X-YciqNo-BKmUk0NGmj5Fy60Gkf8uYyhyqG7mvQWHxQpNiB99STjdJk8ZU30OWvM8pBFGyaq8q2kmhH32Luta3VQ8MsYJ4vfqcUDKdFakLGNwNmy46hqWqX2sghSIw96oy_GfvzVgrsnNNOONzxOcCGeJBnpUjs"
                                    alt="Cybersecurity in the Modern Era"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <p className="font-label-md text-primary mb-2">SECURITY</p>
                            <h3
                                className="font-headline-md text-xl text-on-surface group-hover:text-gradient-indigo transition-all">
                                The New Frontier of Cyber Resilience in 2024</h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAPSxm5b2bPUkicbZU6d5w12UK_u0Lz3D5QAibXlkJ970UjDrdkSh-C-9f16WWMX_06-q0R-rxECVQ0t_Ah8fkWj_gt9sI_IBqlBRUapBQrGu9ZxuSwvNBtr3DxXpqVYb4r0iUgldsEO5RmWU6SrmVORtGQw70kcYNsx_ZKvMihhpB18S5Rd4LedyTnLu31sDg4VSJvLuhB4086q7PiPgBAEkFZDVqVwCSSNk4cmb0bLcVcppXEvGM3nMGoXGYoaYe3w3Tzh6rvV0"
                                    alt="AI and Machine Learning"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <p className="font-label-md text-primary mb-2">STRATEGY</p>
                            <h3
                                className="font-headline-md text-xl text-on-surface group-hover:text-gradient-indigo transition-all">
                                Integrating Generative AI into Enterprise Workflows</h3>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-panel mb-6 p-2">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLjD7tIWafjxgCWfY_L8SYWK8RZNtwof3V8vVrmoCa8cCPeEq30NOvCa8Toj489ktuRLLQH_zw2o5KwOIpYXjHEMPT4YvcebsEZ0LOW17yeDOALmIsdlRdYSmgHFYk6wH36wYe4gQImy9TzRPcVHCXfteBStxW_Kxk7keKzUcB4TsHG5u5tyLZ4UGRozCe1i7pFqwC5joJPHMHK3n38qm8YyayYm36X7DON6nDkP6-DIWCd7VVnMDJp3BdgB6tUPM8jKHqK_S6bEs"
                                    alt="The Evolution of UX Design"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-700 group-hover:scale-105" />
                            </div>
                            <p className="font-label-md text-primary mb-2">ENGINEERING</p>
                            <h3
                                className="font-headline-md text-xl text-on-surface group-hover:text-gradient-indigo transition-all">
                                Beyond Pixels: The Future of Spatial User Experiences</h3>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
