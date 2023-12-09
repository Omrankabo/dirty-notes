

const Contact = () => {
    return ( 
        <div className='container w-full lg:max-w-[875px] mx-auto'>
        <div class="px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto bg-background-50  text-text-base rounded-lg">
            <div class="flex flex-col justify-center">
                <div>
                    <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                        Feel free to send us your opinon. 
                    </h2>
                    <div class="text-text-base mt-8">
                        Hate forms? Send us an&nbsp;<a class="underline" href="mailto:omrankabo@gmail.com">
                        email 
                        </a> instead.
                    </div>
                </div>
            </div>
            <form> 
                <div>
                    <span class="uppercase text-sm text-accent font-bold">
                        Full Name
                    </span>
                    <input
                        class="w-full bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        type="text"
                        placeholder="Enter your Name"
                        required
                    />
                </div>
                <div class="mt-8">
                    <span class="uppercase text-sm text-accent font-bold">
                        Email
                    </span>
                    <input
                        class="w-full bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        type="email"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                <div class="mt-8">
                    <span class="uppercase text-sm text-accent font-bold">
                        Message
                    </span>
                    <textarea
                        class="w-full h-32 bg-transparent border-2 border-secondary-base text-text-base mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-accent focus:border-accent"
                        placeholder="Enter your Message"
                        required
                    ></textarea>
                </div>
                <div class="mt-8">
                    <button
                        class="uppercase text-sm font-bold tracking-wide bg-secondary-base text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-accent"
                        type="submit"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
        </div>
)
}

export default Contact
