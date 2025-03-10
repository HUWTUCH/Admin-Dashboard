import styled from 'styled-components';

export const AuthContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(247, 248, 250, 1);

    .header {
        padding: 24px 20px 0 20px;
    }
;

    .main {
        padding: 0 20px;

        .main-container {
            display: flex;
        }
    ;

        .title {
            font-size: 24px;
            font-weight: 600;
            color: rgba(29, 30, 33, 1);
        }
    ;

        img {
            width: 95px;
            height: 93px;
            position: absolute;
            margin: -45px 0 0 170px;
        }

    ,
    }
;

    .footer {
        display: flex;
        justify-content: flex-end;
    }
;

    @media (min-width: 768px) {
        .header {
            padding: 24px 32px 0 32px;
        }

    ;
        .main {
            margin-top: 110px;
            padding: 0 20px;

            .main-container {
                display: flex;
            }
        ;

            .title {
                font-size: 54px;
                font-weight: 600;
                color: rgba(29, 30, 33, 1);
            }
        ;

            img {
                width: 179px;
                height: 175px;
                position: absolute;
                margin: -65px 0 0 390px;
            }

        ,
        }

    ;
        .footer {
            display: flex;
            justify-content: flex-end;
        }

    ;
    }
    @media (min-width: 1440px) {
        .main {
            display: flex;
            margin-top: 132px;
            justify-content: space-between;
            margin-left: 100px;
        };
    }
`;
export const AuthOutlet = styled.div`
    margin-top: 40px;
    position: absolute;

    .auth-links {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
    };

    .auth-link-text {
        color: rgba(29, 30, 33, 1);
        font-size: 22px;
        font-weight: 600;
    };

    .auth-link:hover {
        display: flex;
        width: 100px;
        height: 44px;
        align-items: center;
        justify-content: center;
        background-color: rgba(89, 177, 122, 1);
        border-radius: 60px;

        .auth-link-text {
            color: rgba(255, 255, 255, 1);
        };
    };
    @media (min-width: 1440px) {
        margin-right: 233px;
        position: relative;
    }
`;
