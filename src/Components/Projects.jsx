const Project=()=>{
    
    return (
        <>
        <div id="projects" class="project-container py-10 border h-[850px]">
            <h1 className="text-6xl font-bold text-center font-serif shadow-2xl">Projects</h1>
            <div className="service-contaner flex justify-between mt-4 px-6">
                <div className="shadow-2xl rounded-2xl service 1 space-y-4 bg-yellow-700 border w-full px-2">
                    <h1 className="font-bold text-2xl">GSTLookUp</h1>
                    <p className="text-black text-wrap">GST Lookup is a Spring Boot backend application that allows users to verify GSTINs and fetch taxpayer information using an external GST API. It simplifies GST verification for businesses and developers by providing structured data and handling API integration.
                    </p>
                   <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>
                    <h3 className="text-black text-sm">
                            <span className="font-semibold">Backend:</span>Spring Boot,GST API, RestTemplate, Jackson ObjectMapper</h3>
                   </div>
                    <a
                        href="https://github.com/Anjali22-07/GSTLookUp"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    <button className="px-3 py-2 bg-green-950 rounded shadow-xl text-center">View Code</button>
                </a>
                </div>
                <div className="shadow-2xl rounded-2xl service 2 space-y-4 bg-yellow-700 border w-full ml-2">
                    <h1 className="font-bold text-2xl">AI HelpDesk Agent</h1>
                    <p className="text-black text-wrap">AI Helpdesk is a backend-focused intelligent support system designed to assist students with common queries and issues. Answers basic questions instantly and create support tickets for more complex, technical, or account-related problems.                      
                    </p>
                    <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold">Backend:</span> OpenAI (Groq API),Spring Boot, Spring AI, MySQL,RestAPI Integration,Hibernate
                        </h3>
                    </div>
                    <a
                        href="https://github.com/Anjali22-07/aiHelpDesk"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    <button className="px-3 py-2 bg-green-950 rounded shadow-xl text-center">View Code</button>
                    </a>
                </div>
                <div className="shadow-2xl rounded-2xl service 3 space-y-4 bg-yellow-700 border w-full ml-2">
                    <h1 className="font-bold text-2xl">Smart Contact Manager</h1>
                    <p className="text-black text-wrap">Smart Contact Manager is a full-stack web application built using Spring Boot
that allows users to securely manage contacts with authentication and role-based access. </p>
                    <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold">Backend:</span> Spring Boot, Spring MVC,
                            Spring Data JPA, Spring Security, Hibernate, MySQL
                        </h3>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript Thymeleaf
                        </h3>
                    </div>
                    <a
                        href="https://github.com/Anjali22-07/SCM"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button className="px-3 py-1 bg-green-950 rounded shadow-xl text-center bottom-">View Code</button>
                </a>
                </div>
                
            </div>
            <div className="service-contaner flex justify-between mt-10 px-8">
                <div className="shadow-2xl rounded-2xl service 1 space-y-4 bg-yellow-700 border w-full px-2">
                    <h1 className="font-bold text-2xl">To-Do APP</h1>
                    <p className="text-black text-wrap">A simple and functional To-Do List web app built using Spring MVC, Spring ORM, and Hibernate, designed to help users manage daily tasks efficiently. </p>
                   <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>
                    <h3 className="text-black text-sm">
                            <span className="font-semibold">Backend:</span>Spring MVC,Spring ORM, Hibernate, MYSQL</h3>
                    <h3 className="text-black text-sm">
                            <span className="font-semibold">FrontEns:</span>Html, CSS, JavaScript, BootStrap</h3>
                   </div>
                    <a
                        href="https://github.com/Anjali22-07/To-Do-Website"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    <button className="px-3 py-2 bg-green-950 rounded shadow-xl text-center">View Code</button>
                </a>
                </div>
                <div className="shadow-2xl rounded-2xl service 2 space-y-4 bg-yellow-700 border w-full ml-2">
                    <h1 class="font-bold text-2xl">Weather APP</h1>
                    <p className="text-black text-wrap">A simple weather application that uses the
                    OpenWeather API to display real-time weather information for searched cities.
                    </p>
                    <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold"></span>Html, CSS, JavaScript, OpenWeather API
                        </h3>
                    </div>
                    <a
                        href="https://github.com/Anjali22-07/weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                    <button className="px-3 py-2 bg-green-950 rounded shadow-xl text-center">View Code</button>
                    </a>
                </div>
                <div className="shadow-2xl rounded-2xl service 3 space-y-4 bg-yellow-700 border w-full ml-2">
                    <h1 className="font-bold text-2xl">Mentorify</h1>
                    <p className="text-black text-wrap">Mentorify is a dynamic web application designed to serve as a platform for technical articles. The application supports features such as user registration, login authentication, article/blog creation, editing, commenting, and more. </p>
                    <div className="space-y-1 mt-0">
                    <h2 className="text-black font-semibold mb-1">Tech Stack</h2>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold">Backend:</span> Java, Servlets,JSP (JavaServer Pages),JDBC for database connectivity,MySQL 
                        </h3>

                        <h3 className="text-black text-sm">
                            <span className="font-semibold">Frontend:</span> HTML, CSS, JavaScript, BootStrap
                        </h3>
                    </div>
                    <a
                        href="https://github.com/Anjali22-07/Mentorify"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <button className="px-3 py-1 bg-green-950 rounded shadow-xl text-center bottom-">View Code</button>
                </a>
                </div>
                
            </div>
  
        </div>
        </>
    );
};

export default Project;