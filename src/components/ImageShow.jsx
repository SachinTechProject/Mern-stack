import React from "react";
import { Box } from "@mui/material";
import html from "../assist/html.jpg";
import css from "../assist/css.jpg";
import js from "../assist/javascript.jpg";
import boot from "../assist/bootstrap.jpg";
import react from "../assist/react.jpg";
import mongodb from "../assist/mongodb.jpg";

export function ImageShow() {
    const images = [
        { src: html, alt: "HTML" },
        { src: css, alt: "CSS" },
        { src: js, alt: "JavaScript" },
        { src: boot, alt: "Bootstrap" },
        { src: react, alt: "React" },
        { src: mongodb, alt: "MongoDB" },
    ];

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    overflowX: "auto",
                    px: 4,
                    gap: 3,
                    whiteSpace: "nowrap",
                    maxWidth: "100%",
                    height: "300px", // Fixed height
                    scrollbarWidth: "thin", // For Firefox
                    "&::-webkit-scrollbar": {
                        height: "8px", // Custom scrollbar for Webkit browsers
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: "#888",
                        borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "#f1f1f1",
                    },
                }}
            >
                {images.map((image, index) => (
                    <Box
                        key={index}
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        sx={{
                            width: "400px", // Fixed width for images
                            height: "100%", // Maintain aspect ratio
                            objectFit: "cover",
                            marginRight: "10px", // Space between images
                            transition: "transform 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)", // Slight zoom effect
                            },
                        }}
                    />
                ))}
            </Box>

           <div className="text-center pt-5">
           <h2>More about this </h2>
           </div>

         <div className="container-fluid bg-body-secondary pb-5">
            <div className="pt-5 container ">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <h4> How we need HTML</h4>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body bg-body-secondary">
                                <strong>This is the first item's accordion body.</strong> It is
                                shown by default, until the collapse plugin adds the appropriate
                                classes that we use to style each element. These classes control
                                the overall appearance, as well as the showing and hiding via
                               
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <h4>Where use CSS</h4>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body bg-body-secondary">
                                <strong>This is the second item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classes that we use to style each element. These
                                classes control the overall appearance, as well as the showing
                               
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                <h4>Where use React</h4>
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body bg-body-secondary">
                                <strong>This is the second item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classes that we use to style each element. These
                                classes control the overall appearance, as well as the showing
                                
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button
                                class="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                <h4> What is JAVASCRIPT</h4>
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div class="accordion-body bg-body-secondary">
                                <strong>This is the third item's accordion body.</strong> It is
                                hidden by default, until the collapse plugin adds the
                                appropriate classes that we use to style each element. These
                                classes control the overall appearance, as well as the showing
                                and hiding via CSS transitions. You can modify any of this with
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

           <div className="container-fluid w-100 pt-5 bg-dark">

           <div className="container ">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-3 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <i className="bi bi-bootstrap" style={{ fontSize: '30px' }}></i>
                    </a>
                    <span className="mb-3 mb-md-0 text-white">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-white" href="#">
                            <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-white" href="#">
                            <i className="bi bi-instagram" style={{ fontSize: '24px' }}></i>
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-white" href="#">
                            <i className="bi bi-facebook" style={{ fontSize: '24px' }}></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>

           </div>
        </>
    );
}

