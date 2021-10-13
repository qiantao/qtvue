<template>
  <!--  头部信息-->
  <header class="head">
    <!--    左上角 logo-->
    <div class="logo-wrapper">
      <a href="" class="admin-logo">
        <img src="static/picture/logo.png" alt="">
      </a>
    </div>
    <!-- 主页图标-->
    <div class="header-links">
      <a href="javascript:void(0);" class="toggle-btn">
        <span></span>
      </a>
    </div>
    <!--    放大镜-->
    <div class="header-links search-link">
      <a class="search-toggle" href="javascript:void(0);">
        <!--        <img src="static/image/search.jpg" style="position: relative; width: 20px;height: 20px; margin-top: 0px">-->
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
      </a>
    </div>

    <!--右侧信息-->
    <div class="header-controls">
      <!--      设置图标-->
      <div class="setting-wrapper header-links">
        <a href="javascript:void(0);" class="setting-info">
                                <span class="header-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         xmlns:xlink="http://www.w3.org/1999/xlink" viewbox="0 0 16 16">
                                        <path d="M7 0h2v3h-2v-3z"></path>
                                        <path d="M6 4v3h1v9h2v-9h1v-3z"></path>
                                        <path d="M2 0h2v8h-2v-8z"></path>
                                        <path d="M1 9v3h1v4h2v-4h1v-3z"></path>
                                        <path d="M12 0h2v10h-2v-10z"></path>
                                        <path d="M11 11v3h1v2h2v-2h1v-3z"></path>
                                    </svg>
                                </span>
        </a>
      </div>
      <!--      购物车图标-->
      <div class="cart-wrapper header-links">
        <a href="javascript:void(0);" class="cart-info">
                    <span class="header-icon">
                      <svg t="1633919305931" class="icon" viewBox="0 0 1024 1024" version="1.1"
                           xmlns="http://www.w3.org/2000/svg" p-id="3120" width="200" height="200"><path
                          d="M64 149.333333h64c12.949333 0 25.450667 10.965333 27.178667 23.978667l74.026666 555.029333C233.706667 762.304 264.384 789.333333 298.453333 789.333333H874.666667v-42.666666H298.474667c-12.629333 0-25.28-11.136-26.986667-23.978667L197.461333 167.68C192.938667 133.461333 162.346667 106.666667 128 106.666667H64v42.666666z"
                          fill="#3D3D3D" p-id="3121"></path><path
                          d="M277.333333 234.666667h597.504c10.453333 0 16.853333 7.402667 15.36 17.792l-51.968 363.712c-1.813333 12.757333-14.634667 23.829333-27.669333 23.829333H341.333333a21.333333 21.333333 0 0 0 0 42.666667h469.226667c34.24 0 65.066667-26.666667 69.909333-60.458667l51.968-363.712c5.141333-36.053333-21.162667-66.496-57.6-66.496H277.333333a21.333333 21.333333 0 0 0 0 42.666667z"
                          fill="#3D3D3D" p-id="3122"></path><path
                          d="M298.666667 896m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                          fill="#3D3D3D" p-id="3123"></path><path
                          d="M810.666667 896m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"
                          fill="#3D3D3D" p-id="3124"></path></svg>
                    </span>
          <span class="item-count">数</span>
        </a>
        <div class="of-notification-comment">
          <div class="of-nt-text">
            <h5>Shopping Cart</h5>
            <h6>Your Have 3 Item In Your Cart</h6>
          </div>
          <div class="of-nt-scroll">

            <div class="of-nt-flex">
              <div class="of-nt-img">
                <img src="static/picture/product2.png" alt="">
              </div>
              <div class="of-nt-cmnt">
                <p>Ceiling Light<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="9px" height="8px">
											<defs>
											<filter>
												<feflood flood-color="#222222" flood-opacity="1" result="floodOut"></feflood>
												<fecomposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut"></fecomposite>
												<feblend mode="normal" in="compOut" in2="SourceGraphic"></feblend>
											</filter>

											</defs>
											<g>
											<path fill-rule="evenodd" fill="#222222"
                            d="M4.713,3.998 L7.864,0.850 C8.060,0.654 8.060,0.337 7.864,0.142 C7.668,-0.054 7.351,-0.054 7.155,0.142 L4.005,3.290 L0.854,0.142 C0.659,-0.054 0.342,-0.054 0.146,0.142 C-0.050,0.337 -0.050,0.654 0.146,0.850 L3.296,3.998 L0.146,7.146 C-0.050,7.341 -0.050,7.658 0.146,7.854 C0.244,7.952 0.372,8.001 0.500,8.001 C0.628,8.001 0.756,7.952 0.854,7.854 L4.005,4.706 L7.155,7.854 C7.253,7.952 7.381,8.001 7.510,8.001 C7.638,8.001 7.766,7.952 7.864,7.854 C8.060,7.658 8.060,7.341 7.864,7.146 L4.713,3.998 Z"></path>
											</g>
											</svg>
										</span></p>
                <div class="int-table-quantity">
                  <div class="quantity-wrapper">
                    <div class="quantity-qty">
                      <h5>$100</h5>
                    </div>
                    <div class="input-group">
                      <span class="quantity-minus"> - </span>
                      <input type="number" class="quantity" value="2">
                      <span class="quantity-plus"> + </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="of-nt-flex">
              <div class="of-nt-img">
                <img src="static/picture/product3.png" alt="">
              </div>
              <div class="of-nt-cmnt">
                <p>Wooden Sofa<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="9px" height="8px">
											<defs>
											<filter>
												<feflood flood-color="#222222" flood-opacity="1" result="floodOut"></feflood>
												<fecomposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut"></fecomposite>
												<feblend mode="normal" in="compOut" in2="SourceGraphic"></feblend>
											</filter>

											</defs>
											<g>
											<path fill-rule="evenodd" fill="#222222"
                            d="M4.713,3.998 L7.864,0.850 C8.060,0.654 8.060,0.337 7.864,0.142 C7.668,-0.054 7.351,-0.054 7.155,0.142 L4.005,3.290 L0.854,0.142 C0.659,-0.054 0.342,-0.054 0.146,0.142 C-0.050,0.337 -0.050,0.654 0.146,0.850 L3.296,3.998 L0.146,7.146 C-0.050,7.341 -0.050,7.658 0.146,7.854 C0.244,7.952 0.372,8.001 0.500,8.001 C0.628,8.001 0.756,7.952 0.854,7.854 L4.005,4.706 L7.155,7.854 C7.253,7.952 7.381,8.001 7.510,8.001 C7.638,8.001 7.766,7.952 7.864,7.854 C8.060,7.658 8.060,7.341 7.864,7.146 L4.713,3.998 Z"></path>
											</g>
										</svg>
										</span></p>
                <div class="int-table-quantity">
                  <div class="quantity-wrapper">
                    <div class="quantity-qty">
                      <h5>$65</h5>
                    </div>
                    <div class="input-group">
                      <span class="quantity-minus"> - </span>
                      <input type="number" class="quantity" value="2">
                      <span class="quantity-plus"> + </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="of-nt-flex">
              <div class="of-nt-img">
                <img src="static/picture/product.png" alt="">
              </div>
              <div class="of-nt-cmnt">
                <p>Dining Chair<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="9px" height="8px">
											<defs>
											<filter>
												<feflood flood-color="#222222" flood-opacity="1" result="floodOut"></feflood>
												<fecomposite operator="atop" in="floodOut" in2="SourceGraphic" result="compOut"></fecomposite>
												<feblend mode="normal" in="compOut" in2="SourceGraphic"></feblend>
											</filter>

											</defs>
											<g>
											<path fill-rule="evenodd" fill="#222222"
                            d="M4.713,3.998 L7.864,0.850 C8.060,0.654 8.060,0.337 7.864,0.142 C7.668,-0.054 7.351,-0.054 7.155,0.142 L4.005,3.290 L0.854,0.142 C0.659,-0.054 0.342,-0.054 0.146,0.142 C-0.050,0.337 -0.050,0.654 0.146,0.850 L3.296,3.998 L0.146,7.146 C-0.050,7.341 -0.050,7.658 0.146,7.854 C0.244,7.952 0.372,8.001 0.500,8.001 C0.628,8.001 0.756,7.952 0.854,7.854 L4.005,4.706 L7.155,7.854 C7.253,7.952 7.381,8.001 7.510,8.001 C7.638,8.001 7.766,7.952 7.864,7.854 C8.060,7.658 8.060,7.341 7.864,7.146 L4.713,3.998 Z"></path>
											</g>
											</svg>
										</span></p>
                <div class="int-table-quantity">
                  <div class="quantity-wrapper">
                    <div class="quantity-qty">
                      <h5>$86</h5>
                    </div>
                    <div class="input-group">
                      <span class="quantity-minus"> - </span>
                      <input type="number" class="quantity" value="2">
                      <span class="quantity-plus"> + </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="int-flex-total">
            <h4>Order Total - </h4>
            <h5>$251</h5>
          </div>
          <div class="int-sop-cart-btn">
            <a href="cart.html" class="ad-btn">View cart</a>
            <a href="checkout.html" class="ad-btn">checkout</a>
          </div>
        </div>
      </div>
      <!--      消息图标-->
      <div class="notification-wrapper header-links">
        <a href="javascript:void(0);" class="notification-info">
          <span class="header-icon">
            <svg t="1633919412378" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="4037" width="200" height="200"><path
                d="M512 256c117.632 0 213.333333 95.701333 213.333333 213.333333v149.333334c0 13.845333 4.501333 27.328 12.8 38.4L789.333333 725.333333H234.666667l51.2-68.266666c8.298667-11.072 12.8-24.554667 12.8-38.4v-149.333334c0-117.632 95.701333-213.333333 213.333333-213.333333m0-64c-153.173333 0-277.333333 124.16-277.333333 277.333333v149.333334l-64 85.333333v42.666667c0 23.466667 19.2 42.666667 42.666666 42.666666h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666666v-42.666667l-64-85.333333v-149.333334c0-153.173333-124.16-277.333333-277.333333-277.333333zM512 853.333333a64 64 0 0 1-64-64h-64c0 70.570667 57.429333 128 128 128s128-57.429333 128-128h-64a64 64 0 0 1-64 64z"
                fill="#A8A8B4" p-id="4038"></path><path
                d="M512 256a42.666667 42.666667 0 1 1-0.021333-85.312A42.666667 42.666667 0 0 1 512 256h97.621333A105.962667 105.962667 0 0 0 618.666667 213.333333c0-58.816-47.850667-106.666667-106.666667-106.666666s-106.666667 47.850667-106.666667 106.666666c0 15.189333 3.306667 29.568 9.045334 42.666667H512z"
                fill="#A8A8B4" p-id="4039"></path></svg>
          </span>
          <span class="count-notification"></span>
        </a>

        <div class="recent-notification">
          <div class="drop-down-header">
            <h4>All Notification</h4>
            <p>You have 6 new notifications</p>
          </div>
          <ul>
            <li>
              <a href="javascript:void(0);">
                <h5><i class="fas fa-exclamation-circle mr-2"></i>Storage Full</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
              </a>
            </li>
            <li>
              <a href="javascript:void(0);">
                <h5><i class="far fa-envelope mr-2"></i>New Membership</h5>
                <p>Lorem ipsum dolor sit amet, consectetuer.</p>
              </a>
            </li>
          </ul>
          <div class="drop-down-footer">
            <a href="javascript:void(0);" class="btn sm-btn">
              View All
            </a>
          </div>
        </div>
      </div>
      <!--      用户信息-->
      <div class="user-info-wrapper header-links">
        <a href="javascript:void(0);" class="user-info">
          <img src="static/picture/user.jpg" alt="" class="user-img">
          <div class="blink-animation">
            <span class="blink-circle"></span>
            <span class="main-circle"></span>
          </div>
        </a>
        <div class="user-info-box">
          <div class="drop-down-header">
            <h4>John Brown</h4>
            <p>UI | UX Designer</p>
          </div>
          <ul>
            <li>
              <a href="profile.html">
                <i class="far fa-edit"></i> Edit Profile
              </a>
            </li>
            <li>
              <a href="setting.html">
                <i class="fas fa-cog"></i> Settings
              </a>
            </li>
            <li>
              <a href="login.html">
                <i class="fas fa-sign-out-alt"></i> logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style>

.head {
  height: 80px;
  width: 100%;
  box-shadow: 0 0 20px;
  position: fixed;
  display: flex;
  top: 0px;
  z-index: 98;
  background-color: white;
}

.logo-wrapper {
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  width: 350px;
  background-color: var(--secondary);
}

.header-controls {
  width: 100%;
  z-index: 98;
}
.user-info-box{
  z-index: 99;
}
.recent-notification{
  z-index: 99;
}
.of-notification-comment{
  z-index: 99;
}
</style>
