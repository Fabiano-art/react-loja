import React from "react"
import "./Nav.css"

export default function Nav(props){
    return (
        <div className="nav">
            <nav className="nav-menu">
                <a href="/products" className="nav-item">
                    <p>Móveis</p>
                    <svg aria-hidden="true" css="custom" focusable="false" data-prefix="fas" data-icon="couch" class="svg-inline--fa fa-couch fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M160 224v64h320v-64c0-35.3 28.7-64 64-64h32c0-53-43-96-96-96H160c-53 0-96 43-96 96h32c35.3 0 64 28.7 64 64zm416-32h-32c-17.7 0-32 14.3-32 32v96H128v-96c0-17.7-14.3-32-32-32H64c-35.3 0-64 28.7-64 64 0 23.6 13 44 32 55.1V432c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16v-16h384v16c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V311.1c19-11.1 32-31.5 32-55.1 0-35.3-28.7-64-64-64z"></path>
                    </svg>
                </a>
                <a href="/products" className="nav-item">
                    <p>Games</p>
                    <i class="bi bi-controller"></i>
                </a>
                <a href="/products" className="nav-item">
                    <p>Esporte e lazer</p>
                    <i class="bi bi-bicycle"></i>
                </a>
                <a href="/products" className="nav-item">
                    <p>Reformas</p>
                    <i class="bi bi-house-door"></i>
                </a>
                <a href="/products" className="nav-item">
                    <p>Beleza</p>
                    <svg aria-hidden="true" css="custom" focusable="false" data-prefix="fas" data-icon="air-freshener" class="svg-inline--fa fa-air-freshener fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M224 160H96C43 160 0 203 0 256V480C0 497.625 14.375 512 32 512H288C305.625 512 320 497.625 320 480V256C320 203 277 160 224 160ZM160 416C115.875 416 80 380.125 80 336S115.875 256 160 256S240 291.875 240 336S204.125 416 160 416ZM224 32C224 14.375 209.625 0 192 0H128C110.375 0 96 14.375 96 32V128H224V32ZM381.781 51.578C383 50.969 384 49.359 384 48C384 46.625 383 45.031 381.781 44.422L352 32L339.562 2.219C338.969 1 337.375 0 336 0S333.031 1 332.406 2.219L320 32L290.219 44.422C289 45.031 288 46.625 288 48C288 49.359 289 50.969 290.219 51.578L320 64L332.406 93.781C333.031 95 334.625 96 336 96S338.969 95 339.562 93.781L352 64L381.781 51.578ZM448 64L460.406 93.781C461.031 95 462.625 96 464 96S466.969 95 467.562 93.781L480 64L509.781 51.578C511 50.969 512 49.359 512 48C512 46.625 511 45.031 509.781 44.422L480 32L467.562 2.219C466.969 1 465.375 0 464 0S461.031 1 460.406 2.219L448 32L418.219 44.422C417 45.031 416 46.625 416 48C416 49.359 417 50.969 418.219 51.578L448 64ZM480 224L467.562 194.219C466.969 193 465.375 192 464 192S461.031 193 460.406 194.219L448 224L418.219 236.422C417 237.031 416 238.625 416 240C416 241.359 417 242.969 418.219 243.578L448 256L460.406 285.781C461.031 287 462.625 288 464 288S466.969 287 467.562 285.781L480 256L509.781 243.578C511 242.969 512 241.359 512 240C512 238.625 511 237.031 509.781 236.422L480 224ZM445.781 147.578C447 146.969 448 145.359 448 144C448 142.625 447 141.031 445.781 140.422L416 128L403.562 98.219C402.969 97 401.375 96 400 96S397.031 97 396.406 98.219L384 128L354.219 140.422C353 141.031 352 142.625 352 144C352 145.359 353 146.969 354.219 147.578L384 160L396.406 189.781C397.031 191 398.625 192 400 192S402.969 191 403.562 189.781L416 160L445.781 147.578Z"></path>
                    </svg>
                </a>
                <a href="/products" className="nav-item">
                    <p>Eletroportáteis</p>
                    <i class="bi bi-phone"></i>
                </a>
                <a href="/products" className="nav-item">
                    <p>Bebidas</p>
                    <i class="bi bi-cup-straw"></i>
                </a>
                <a href="/products" className="nav-item">
                    <p>Calçados</p>
                    <svg aria-hidden="true" css="custom" focusable="false" data-prefix="fas" data-icon="shoe-prints" class="svg-inline--fa fa-shoe-prints fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M192 160h32V32h-32c-35.35 0-64 28.65-64 64s28.65 64 64 64zM0 416c0 35.35 28.65 64 64 64h32V352H64c-35.35 0-64 28.65-64 64zm337.46-128c-34.91 0-76.16 13.12-104.73 32-24.79 16.38-44.52 32-104.73 32v128l57.53 15.97c26.21 7.28 53.01 13.12 80.31 15.05 32.69 2.31 65.6.67 97.58-6.2C472.9 481.3 512 429.22 512 384c0-64-84.18-96-174.54-96zM491.42 7.19C459.44.32 426.53-1.33 393.84.99c-27.3 1.93-54.1 7.77-80.31 15.04L256 32v128c60.2 0 79.94 15.62 104.73 32 28.57 18.88 69.82 32 104.73 32C555.82 224 640 192 640 128c0-45.22-39.1-97.3-148.58-120.81z"></path>
                    </svg>
                </a>
                <a href="/products" className="nav-item">
                    <p>Vestuário</p>
                    <svg aria-hidden="true" css="custom" focusable="false" data-prefix="fas" data-icon="tshirt" class="svg-inline--fa fa-tshirt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M631.2 96.5L436.5 0C416.4 27.8 371.9 47.2 320 47.2S223.6 27.8 203.5 0L8.8 96.5c-7.9 4-11.1 13.6-7.2 21.5l57.2 114.5c4 7.9 13.6 11.1 21.5 7.2l56.6-27.7c10.6-5.2 23 2.5 23 14.4V480c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V226.3c0-11.8 12.4-19.6 23-14.4l56.6 27.7c7.9 4 17.5.8 21.5-7.2L638.3 118c4-7.9.8-17.6-7.1-21.5z"></path>
                    </svg>
                </a>
                <a href="/products" className="nav-item">
                    <p>Acessórios</p>
                    <svg aria-hidden="true" css="custom" focusable="false" data-prefix="fas" data-icon="glasses" class="svg-inline--fa fa-glasses fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M574.1 280.37L528.75 98.66c-5.91-23.7-21.59-44.05-43-55.81-21.44-11.73-46.97-14.11-70.19-6.33l-15.25 5.08c-8.39 2.79-12.92 11.86-10.12 20.24l5.06 15.18c2.79 8.38 11.85 12.91 20.23 10.12l13.18-4.39c10.87-3.62 23-3.57 33.16 1.73 10.29 5.37 17.57 14.56 20.37 25.82l38.46 153.82c-22.19-6.81-49.79-12.46-81.2-12.46-34.77 0-73.98 7.02-114.85 26.74h-73.18c-40.87-19.74-80.08-26.75-114.86-26.75-31.42 0-59.02 5.65-81.21 12.46l38.46-153.83c2.79-11.25 10.09-20.45 20.38-25.81 10.16-5.3 22.28-5.35 33.15-1.73l13.17 4.39c8.38 2.79 17.44-1.74 20.23-10.12l5.06-15.18c2.8-8.38-1.73-17.45-10.12-20.24l-15.25-5.08c-23.22-7.78-48.75-5.41-70.19 6.33-21.41 11.77-37.09 32.11-43 55.8L1.9 280.37A64.218 64.218 0 0 0 0 295.86v70.25C0 429.01 51.58 480 115.2 480h37.12c60.28 0 110.37-45.94 114.88-105.37l2.93-38.63h35.75l2.93 38.63C313.31 434.06 363.4 480 423.68 480h37.12c63.62 0 115.2-50.99 115.2-113.88v-70.25c0-5.23-.64-10.43-1.9-15.5zm-370.72 89.42c-1.97 25.91-24.4 46.21-51.06 46.21H115.2C86.97 416 64 393.62 64 366.11v-37.54c18.12-6.49 43.42-12.92 72.58-12.92 23.86 0 47.26 4.33 69.93 12.92l-3.13 41.22zM512 366.12c0 27.51-22.97 49.88-51.2 49.88h-37.12c-26.67 0-49.1-20.3-51.06-46.21l-3.13-41.22c22.67-8.59 46.08-12.92 69.95-12.92 29.12 0 54.43 6.44 72.55 12.93v37.54z"></path>
                    </svg>
                </a>
            </nav>
        </div>
    )
}