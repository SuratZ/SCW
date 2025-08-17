import { Typography, Container, Box } from '@mui/material';

export default function About() {
    return (
        <>
            <Box sx={{
                background: 'linear-gradient(to bottom, #ffffff 0%, #e3f2fd 100%)',
                display: "flex",
                alignItems: "center", // vertical centering
            }}>
                <Container sx={{
                    textAlign: 'center',
                    mt: 4
                }}>
                    <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold' }} >
                        About us
                    </Typography>
                    <Typography color='inherit' variant="h4" sx={{ fontWeight: 'bold' }}>
                        Our Core Values<br />"Empowering Your Success"
                    </Typography>
                    <Typography color="text.secondary" variant="body1" sx={{ p: 2 }}>
                        We believe in putting our clients first and helping them achieve their goals.
                    </Typography>

                </Container>
            </Box>
            <Box
                sx={{

                    backgroundColor: '#ffffff',
                    boxShadow: 1,
                    zIndex: 0,
                    pl: 10,
                    pr: 10,
                    pb: 4               
                }}
            >
                <Container
                    sx={{
                        p: 4,
                        // ml: 10,
                        // mr: 10,
                    }}
                >
                    <Typography color="text.secondary" variant="body2" align="left" fontSize={16} paragraph
                    >

                        SCW  International Certification Co., Ltd.  ก่อตั้งเมื่อวันที่ 4 ธันวาคม พ.ศ. 2544 ทำธุรกิจบริการให้การตรวจรับรองระบบมาตรฐาน สามารถออกใบรับรองระบบ ISO 9001, ระบบสิ่งแวดล้อม ISO 14001, ความปลอดภัยและอาชีวอนามัย
                        ISO 45001, ความปลอดภัยทางอาหาร GHPs/HACCP, ISO 22000, FSSC 22000, เครื่องมือแพทย์ ISO 13485 จาก LMS Assessments Limited    ซึ่งได้รับการรับรองจาก SCC, แคนาดา และจาก LMS,  EGAC  สามารถสืบค้นข้อมูลการรับรองใน website ของ LMS (บริษัทแม่) และ website ของ IAF ซึ่งเป็นหลักการแสดงสถานะของใบรับรองที่ถูกต้องตามหลักสากล เพื่อขยายโอกาสทางการตลาดของสินค้าในประเทศและต่างประเทศ
                        <br /><br />
                        ปัจจุบันได้ออกการรรับรองระบบมาตรฐาน ISO ทุกระบบในประเทศไทยมากกว่า 200 บริษัทฯ
                        <br /><br />
                        SCW International Certification Co., Ltd. Established since 4/12/2001, operating in the business of providing certification services, ISO 9001, ISO 14001 environmental system, ISO 14001 environmental system, occupational health and safety, ISO 45001, food safety, GHPs/HACCP, ISO 22000, FSSC 22000, medical equipment ISO 13485 from LMS Assessments Limited, which is certified by SCC, Canada and from LMS, EGAC can search for certification information on the LMS website (parent company) and IAF's website, which is the principle of showing the status of the certificate that is valid according to international principles. To expand market opportunities for domestic and international products
                        <br /><br />
                        Currently, more than 200 companies have issued ISO standard system certification for all systems in Thailand.
                    </Typography>
                </Container>
            </Box>
        </>

    );
}