<template>
  <div id="customers">
    <div class="page-wrapper">
      <div class="main-content">
        <!-- Page Title Start -->
        <div class="row">
          <div class="colxl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="page-title-wrapper">
              <div class="page-title-box ad-title-box-use">
                <h4 class="page-title">Customers</h4>
              </div>
              <div class="ad-breadcrumb">
                <ul>
                  <li>
                    <div class="ad-user-btn">
                      <input class="form-control" type="text" placeholder="Search Here..." id="text-input">
                      <svg t="1633918009196" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg"
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
                      <a class="ad-btn">New Customers</a>
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
                <h4>Customers List</h4>
              </div>
              <div class="card-body">
                <div class="chart-holder">
                  <div class="table-responsive">
                    <table class="table table-styled mb-0">
                      <thead>
                      <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Phone / Email</th>
                        <th>Address</th>
                        <th>Rating</th>
                        <th>Wallet Balance</th>
                        <th>Joining Date</th>
                        <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>
                          <div class="checkbox">
                            <input id="checkbox" type="checkbox">
                            <label for="checkbox"></label>
                          </div>
                        </td>
                        <td>Scott Henry</td>
                        <td>
                          +(00) 4512 451<br>
                          scotthenry@gamil.com
                        </td>
                        <td>2210 Grove Street Bethpage, NI 440014</td>
                        <td>
                          <label class="mb-0 badge badge-primary">4.1</label>
                        </td>
                        <td>$6,415</td>
                        <td>22/06/2021</td>
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
                            <input id="checkbox23" type="checkbox">
                            <label for="checkbox23"></label>
                          </div>
                        </td>
                        <td>Mark Wood</td>
                        <td>
                          +(00) 4512 451<br>
                          markwood@gamil.com
                        </td>
                        <td>2210  sed do eiusmod tempor ut, NI 440022</td>
                        <td>
                          <label class="mb-0 badge badge-primary">2.2</label>
                        </td>
                        <td>$2,415</td>
                        <td>22/07/2021</td>
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
                            <input id="checkbox34" type="checkbox">
                            <label for="checkbox34"></label>
                          </div>
                        </td>
                        <td>Mike Doe</td>
                        <td>
                          +(00) 4512 451<br>
                          mikedoe@gamil.com
                        </td>
                        <td>4477 labore et dolore magna, NI 440011</td>
                        <td>
                          <label class="mb-0 badge badge-primary">3.1</label>
                        </td>
                        <td>$5,415</td>
                        <td>12/02/2021</td>
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
                            <input id="checkbox44" type="checkbox">
                            <label for="checkbox4"></label>
                          </div>
                        </td>
                        <td>Tom John</td>
                        <td>
                          +(00) 4512 451<br>
                          tomjohn@gamil.com
                        </td>
                        <td>4877 occaecat cupidatat non proident, NI 2441</td>
                        <td>
                          <label class="mb-0 badge badge-primary">1.1</label>
                        </td>
                        <td>$4,411</td>
                        <td>11/07/2021</td>
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
                            <input id="checkbox22" type="checkbox">
                            <label for="checkbox"></label>
                          </div>
                        </td>
                        <td>Scott Henry</td>
                        <td>
                          +(00) 4512 451<br>
                          scotthenry@gamil.com
                        </td>
                        <td>2210 Grove Street Bethpage, NI 440014</td>
                        <td>
                          <label class="mb-0 badge badge-primary">4.1</label>
                        </td>
                        <td>$6,415</td>
                        <td>22/06/2021</td>
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
                            <input id="checkbox24" type="checkbox">
                            <label for="checkbox24"></label>
                          </div>
                        </td>
                        <td>Mark Wood</td>
                        <td>
                          +(00) 4512 451<br>
                          markwood@gamil.com
                        </td>
                        <td>2210  sed do eiusmod tempor ut, NI 440022</td>
                        <td>
                          <label class="mb-0 badge badge-primary">2.2</label>
                        </td>
                        <td>$2,415</td>
                        <td>22/07/2021</td>
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
                            <input id="checkbox33" type="checkbox">
                            <label for="checkbox33"></label>
                          </div>
                        </td>
                        <td>Mike Doe</td>
                        <td>
                          +(00) 4512 451<br>
                          mikedoe@gamil.com
                        </td>
                        <td>4477 labore et dolore magna, NI 440011</td>
                        <td>
                          <label class="mb-0 badge badge-primary">3.1</label>
                        </td>
                        <td>$5,415</td>
                        <td>12/02/2021</td>
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
                        <td>Tom John</td>
                        <td>
                          +(00) 4512 451<br>
                          tomjohn@gamil.com
                        </td>
                        <td>4877 occaecat cupidatat non proident, NI 2441</td>
                        <td>
                          <label class="mb-0 badge badge-primary">1.1</label>
                        </td>
                        <td>$4,411</td>
                        <td>11/07/2021</td>
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
                <div class="text-right">
                  <nav class="d-inline-block">
                    <ul class="pagination mb-0 ">
                      <li class="page-item disabled ">
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
  name: "Customers"
}
</script>

<style scoped>
.page-wrapper{
  z-index: 1;
}
#customers{
  top:0px;
  left: 0px;
  /*left: -280px;*/
  height: 100%;
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>