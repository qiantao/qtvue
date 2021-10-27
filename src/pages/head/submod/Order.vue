<template>
  <div id="order">
    <div class="page-wrapper">
      <div class="main-content">
        <!-- Page Title Start -->
        <div class="row">
          <div class="colxl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="page-title-wrapper">
              <div class="page-title-box ad-title-box-use">
                <h4 class="page-title">Orders</h4>
              </div>
              <div class="ad-breadcrumb">
                <ul>
                  <li>
                    <div class="ad-user-btn">
                      <input class="form-control" type="text" placeholder="Search Here..." id="text-input">
                      <svg t="1633918009196" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                           p-id="2301"
                           width="20"
                           height="20"
                      >
                        <path d="M941.056 808.96l-288.256-285.184c79.36-120.832 69.12-280.576-32.768-381.952C502.784 25.6 308.736 30.72
          186.368 153.6c-122.368 122.88-126.464 316.928-9.216 433.664 103.936 103.424 268.8 110.592 390.144 24.576l280.576
          276.48c13.312 13.312 30.208 22.016 48.64 24.576 39.424 5.632 56.32-13.312
          62.976-34.304 7.68-24.576 0-51.712-18.432-69.632zM549.376 513.536c-88.064
          88.576-227.328 93.696-310.272 11.776-82.944-82.432-78.848-221.696
          9.728-310.272 88.064-89.088 227.328-94.208 310.272-11.776 82.432 82.432 78.336 221.696-9.728 310.272z"
                              fill="#040000" p-id="2302"></path>
                      </svg>
                    </div>
                  </li>
                  <li>
                    <div class="add-group">
                      <a class="ad-btn">Add New Order</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Table Start -->
        <div class="row">
          <!-- Styled Table Card-->
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="card table-card">
              <div class="card-header pb-0">
                <h4>Orders List</h4>
              </div>
              <div class="card-body">
                <div class="chart-holder">
                  <div class="table-responsive">
                    <table class="table table-styled mb-0">
                      <thead>
                      <tr>
                        <th>
                          <div class="checkbox">
                            <input id="checkbox1" type="checkbox">
                            <label for="checkbox1"></label>
                          </div>
                        </th>
                        <th>Order ID</th>
                        <th>Billing Name</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Payment Status</th>
                        <th>Payment Method</th>
                        <th>View Details</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox2" type="checkbox">
                            <label for="checkbox2"></label>
                          </div>
                        </td>
                        <td>#JH2033</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/1.jpg" alt=" ">
                                                            <span class="ml-2 ">Emily Arnold</span>
                                                        </span>
                        </td>
                        <td>22/06/2021</td>
                        <td>$600</td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">Pending</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-paypal"></i>
                                                            <span class="ml-2">Paypal</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox3" type="checkbox">
                            <label for="checkbox3"></label>
                          </div>
                        </td>
                        <td>#MK4433</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/4.jpg" alt=" ">
                                                            <span class="ml-2 ">Mark Doe</span>
                                                        </span>
                        </td>
                        <td>14/07/2021</td>
                        <td>$700</td>
                        <td>
                          <label class="mb-0 badge badge-success" title="" data-original-title="Pending">Success</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-visa"></i>
                                                            <span class="ml-2">Visa</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox4" type="checkbox">
                            <label for="checkbox4"></label>
                          </div>
                        </td>
                        <td>#MD4578</td>
                        <td>
                                                        <span class="img-thumb">
                                                            <img src="static/picture/7.jpg" alt=" ">
                                                            <span class="ml-2 ">Mark Smith</span>
                                                        </span>
                        </td>
                        <td>28/08/2021</td>
                        <td>$800</td>
                        <td>
                          <label class="mb-0 badge badge-danger" title="" data-original-title="Pending">Cancel</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fas fa-credit-card"></i>
                                                            <span class="ml-2">Credit Card</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox5" type="checkbox">
                            <label for="checkbox5"></label>
                          </div>
                        </td>
                        <td>#DD1048</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/1.jpg" alt=" ">
                                                            <span class="ml-2 ">Mike Wood</span>
                                                        </span>
                        </td>
                        <td>13/04/2021</td>
                        <td>$880</td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">Pending</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-mastercard"></i>
                                                            <span class="ml-2">Mastercard</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox6" type="checkbox">
                            <label for="checkbox6"></label>
                          </div>
                        </td>
                        <td>#JH2033</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/3.jpg" alt=" ">
                                                            <span class="ml-2 ">Emily Arnold</span>
                                                        </span>
                        </td>
                        <td>22/06/2021</td>
                        <td>$600</td>
                        <td>
                          <label class="mb-0 badge badge-success" title="" data-original-title="Pending">Success</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-paypal"></i>
                                                            <span class="ml-2">Paypal</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox7" type="checkbox">
                            <label for="checkbox7"></label>
                          </div>
                        </td>
                        <td>#MK4433</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/1.jpg" alt=" ">
                                                            <span class="ml-2 ">John Doe</span>
                                                        </span>
                        </td>
                        <td>14/07/2021</td>
                        <td>$700</td>
                        <td>
                          <label class="mb-0 badge badge-danger" title="" data-original-title="Pending">Cancel</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-visa"></i>
                                                            <span class="ml-2">Visa</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox8" type="checkbox">
                            <label for="checkbox8"></label>
                          </div>
                        </td>
                        <td>#MD4578</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/7.jpg" alt=" ">
                                                            <span class="ml-2 ">Mark Smith</span>
                                                        </span>
                        </td>
                        <td>28/08/2021</td>
                        <td>$800</td>
                        <td>
                          <label class="mb-0 badge badge-success" title="" data-original-title="Pending">Success</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fas fa-credit-card"></i>
                                                            <span class="ml-2">Credit Card</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox9" type="checkbox">
                            <label for="checkbox9"></label>
                          </div>
                        </td>
                        <td>#DD1048</td>
                        <td>
                                                        <span class="img-thumb ">
                                                            <img src="static/picture/4.jpg" alt=" ">
                                                            <span class="ml-2 ">Mike Wood</span>
                                                        </span>
                        </td>
                        <td>13/04/2021</td>
                        <td>$880</td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">Pending</label>
                        </td>
                        <td>
                                                        <span class="img-thumb">
                                                            <i class="fab fa-cc-mastercard"></i>
                                                            <span class="ml-2">Mastercard</span>
                                                        </span>
                        </td>
                        <td>
                          <label class="mb-0 badge badge-primary" title="" data-original-title="Pending">View Detail</label>
                        </td>
                        <td class="relative">
                          <a class="action-btn " href="javascript:void(0); ">
                            <svg class="default-size " viewbox="0 0 341.333 341.333 ">
                              <g>
                                <g>
                                  <g>
                                    <path d="M170.667,85.333c23.573,0,42.667-19.093,42.667-42.667C213.333,19.093,194.24,0,170.667,0S128,19.093,128,42.667 C128,66.24,147.093,85.333,170.667,85.333z "></path>
                                    <path d="M170.667,128C147.093,128,128,147.093,128,170.667s19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 S194.24,128,170.667,128z "></path>
                                    <path d="M170.667,256C147.093,256,128,275.093,128,298.667c0,23.573,19.093,42.667,42.667,42.667s42.667-19.093,42.667-42.667 C213.333,275.093,194.24,256,170.667,256z "></path>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </a>
                          <div class="action-option ">
                            <ul>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-edit mr-2 "></i>Edit</a>
                              </li>
                              <li>
                                <a href="javascript:void(0); "><i class="far fa-trash-alt mr-2 "></i>Delete</a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="text-right pt-2">
                  <nav class="d-inline-block">
                    <ul class="pagination mb-0 ">
                      <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);" tabindex="-1"><i class="fas fa-chevron-left"></i></a>
                      </li>
                      <li class="page-item active "><a class="page-link " href="javascript:void(0); ">1</a></li>
                      <li class="page-item ">
                        <a class="page-link " href="javascript:void(0); ">2</a>
                      </li>
                      <li class="page-item "><a class="page-link " href="javascript:void(0); ">3</a></li>
                      <li class="page-item ">
                        <a class="page-link " href="javascript:void(0); "><i class="fas fa-chevron-right "></i></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ad-footer-btm">
          <p>Copyright &copy; 2021.Company name All rights reserved.<a target="_blank" href="https://sc.chinaz.com/moban/">&#x7F51;&#x9875;&#x6A21;&#x677F;</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order"
}
</script>

<style scoped>
.page-wrapper{
  z-index: 1;
}
#order{
  top:0px;
  left: 0px;
  /*left: -280px;*/
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>