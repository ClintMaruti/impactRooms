import styled from "styled-components";

export const ProfileCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CompanyInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  width: 650px;
  margin-left: 25px;
  color: #3c4050;
  font-size: 12px;
  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 1rem;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 12px;
`;

export const Icon = styled.p`
  font-size: 30px;
  color: #ff5b00;
  padding-right: 20px;
`;

export const SecondrayIcon = styled.img`
  padding-right: 20px;
  width: 20px;
  height: 20px;
`;

export const SpecialIcon = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 30px;
  color: #003f6f;
  padding-right: 15px;
`;

// Dashboard

export const DashboardCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  max-width: 2400px;
  margin-left: 25px;
  color: #3c4050;
  font-size: 12px;
  /* height: 200px; */
  margin-bottom: 10px;
  @media screen and (min-width: 1444px) {
    width: 1200px;
  }
`;

export const DashHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 20px;
  border-bottom: 1px solid #e5e5e5;
`;

export const DashboardInfo = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 1rem;
`;

export const BlurSection = styled.div`
  padding-top: 18px;
  position: relative;
  filter: blur(3px);
  @media screen and (min-width: 1444px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25%;
  padding-top: 10px;
  margin: 0 auto;
  position: absolute;
  z-index: 9999;
`;

export const ComingSoonInner = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40%;
  padding-top: 12px;
  margin: 0 auto;
  position: absolute;
  z-index: 9999;
`;

export const InfoIcon = styled.div`
  position: absolute;
  right: 40px;
`;
