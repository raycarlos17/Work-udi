import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="bg-light text-center text-lg-left">
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'rgba(255, 255, 255, .8)' }}>
                        © 2020 Copyright:
              <a className="text-white" href="/"> WorkiUdi.com</a>
                    </div>
                    {/* Copyright */}
                </footer>

            </div>
        );
    }
}

export default Footer;