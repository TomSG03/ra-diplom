import React from 'react';
import HeaderLogo from './HeaderLogo';
import HeaderMenu from './HeaderMenu';
import HeaderSearchButton from './HeaderSearchButton';
import HeaderSearchForm from './HeaderSearchForm';

function HeaderNavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <HeaderLogo />
            <div className="collapase navbar-collapse" id="navbarMain">
             <HeaderMenu />
              <div>
                <div className="header-controls-pics">
                  <HeaderSearchButton />
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className="header-controls-pic header-controls-cart">
                    <div className="header-controls-cart-full">1</div>
                    <div className="header-controls-cart-menu"></div>
                  </div>
                </div>
                <HeaderSearchForm />
              </div>
            </div>
          </nav>
  )
}

export default HeaderNavBar