import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Wrapper = styled.div`
    height: 80px;
    background: #12a2d8;
`;

const InnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 1680px;
    height: 100%;
    margin: 0 auto;
`;

const LogoTitle = styled.div`
    font-size: 55px;
    color: #fff;
`;

const SiteLink = styled(NavLink)`
    font-size: 25px;
    margin-right: 10px;
    padding: 4px 12px;
    color: #fff;
    text-decoration: none;
    border: 1px solid transparent;
    transition: border ease 0.3s;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        border: 1px solid #fff;
    }

    &.active {
        border: 1px solid #fff;
    }
`;

const Header = () => {
    return (
        <Wrapper>
            <InnerWrapper>
                <LogoTitle>MyReads</LogoTitle>

                <div>
                    <SiteLink exact to="/">
                        List
                    </SiteLink>
                    <SiteLink to="/search">Search</SiteLink>
                </div>
            </InnerWrapper>
        </Wrapper>
    );
};

export default Header;
