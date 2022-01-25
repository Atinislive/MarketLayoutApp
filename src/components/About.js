import React from "react";
import { useState } from "react";
import { Collapse } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import download from "../components/images/download.jpg";
import {  faDownload, faFrown, faLaugh, faSmile, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { faTired } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        class="btn btn-transparent"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      ></button>

      <Collapse in={open}>
     
        <div id="example-collapse-text">
        <h5>
     Executing Agri-Input Orders  &nbsp;   &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; Batched By
    </h5>
          <div class="tab">
            <button class="tablinks" onclick="" > 
              File <FontAwesomeIcon icon={faSortDown}> </FontAwesomeIcon>
            </button>{" "}
            <button class="tablinks" onclick=""></button>{" "}
            <button class="tablinks" onclick=""></button>
            <button class="tablinks" onclick="">Alex LEE 
           
            </button>{" "}
            <button class="tablinks" onclick=""></button>{" "}
            <button class="tablinks" onclick=""></button>{" "}
            <button class="tablinks" onclick=""></button>
            <button class="tablinks" onclick="">
              {" "}
              <a href={download} class="download-btn" download>
                {" "}
                <FontAwesomeIcon icon={faDownload}> </FontAwesomeIcon>
              </a>{" "}
              Download
              <i class="fa fa-download"></i>
            </button>
          </div>

          <table class="center">
       
            <tr>
              <th>Sr.No </th>
              <th>Agri-Input Category</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Order Summary </th>
              <th>Download</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Seeds</td>
              <td>
                {" "}
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>Chilli suka</td>
              <td>26</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Nutrients</td>
              <td>
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>chill</td>
              <td>26</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>pesticide</td>
              <td>
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>Chilli suka</td>
              <td>114</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>growing medium </td>
              <td>
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>Chilli suka</td>
              <td>40</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>growing medium</td>
              <td>
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>Chilli suka</td>
              <td>20</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>pesticide</td>
              <td>
                <img src={download} class="d-block w-50" alt="..." />
              </td>
              <td>Chilli suka</td>
              <td>50</td>
              <td>
                <a href={download} class="download-btn" download>
                  {" "}
                  <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                </a>
                <i class="fa fa-download"></i>
              </td>
            </tr>
          </table>
        </div>
      </Collapse>



     <h3 className="main-heading
     "> Agri-Input Master Maintenance</h3>


      <div class="tab">
        <button
          class="tablinks"
          className="nav-link dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        >
         
          <div className="dropdown-item"><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon>Pending</div>
        </button>{" "}
        <button
          class="tablinks"
          className="nav-link dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        >
         <div className="dropdown-item">  <FontAwesomeIcon icon={faTired}></FontAwesomeIcon>Executing</div>
          <div className="dropdown-item">
            <button
              type="button"
              class="btn btn-transparent shadow-none"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Undo Batch
            </button>
          </div>{" "}
          <div className="dropdown-item">
            <a href="#">Assign Suppliers </a>
          </div>{" "}
          <div className="dropdown-item">
            <a href="#">Generate PO </a>
          </div>
        </button>
        <button
          class="tablinks"
          className="nav-link dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        >
          <div className="dropdown-item"><FontAwesomeIcon icon={faFrown}></FontAwesomeIcon>SELECTED</div>
        </button>{" "}
        <button
          class="tablinks"
          className="nav-link dropdown-toggle dropdown-toggle-split"
          data-toggle="dropdown"
        >
          <div className="dropdown-item"><FontAwesomeIcon icon={faLaugh} bg-color=""></FontAwesomeIcon>COMPLETED</div>
        </button>
      </div>
    </div>
  );
};
export default About;
