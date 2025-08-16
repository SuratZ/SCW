import { Typography, Container, Box } from '@mui/material';

export default function About() {
    return (
        <Container sx={{
            textAlign: 'center',
            mt: 4
        }}>
            <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold'}} >
                About us
            </Typography>
            <Typography color='inherit' variant="h4" sx={{ fontWeight: 'bold' }}>
                Our Core Values<br />"Empowering Your Success"
            </Typography>
            <Box sx={{
                        p: 2,
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    ml: '-50vw',
                    mr: '-50vw',
                    boxShadow: 1}}>
                <Typography color="text.secondary" variant="body1">
                    We believe in putting our clients first and helping them achieve their goals.
                </Typography>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#e3e6e2',
                    p: 4,
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    ml: '-50vw',
                    mr: '-50vw',
                    boxShadow: 1
                }}
            >
                <Box>
                    <Typography color="text.secondary" variant="body2" align="left"
                        sx={{
                            ml: 12,
                            mr: 12,
                        }}>

                        SCW  International Certification Co., Ltd.  ก่อตั้งเมื่อวันที่ 4 ธันวาคม พ.ศ. 2544 ทำธุรกิจบริการให้การตรวจรับรองระบบมาตรฐาน สามารถออกใบรับรองระบบ ISO 9001, ระบบสิ่งแวดล้อม ISO 14001, ความปลอดภัยและอาชีวอนามัย
                        ISO 45001, ความปลอดภัยทางอาหาร GHPs/HACCP, ISO 22000, FSSC 22000, เครื่องมือแพทย์ ISO 13485 จาก LMS Assessments Limited    ซึ่งได้รับการรับรองจาก SCC, แคนาดา และจาก LMS,  EGAC  สามารถสืบค้นข้อมูลการรับรองใน website ของ LMS (บริษัทแม่) และ website ของ IAF ซึ่งเป็นหลักการแสดงสถานะของใบรับรองที่ถูกต้องตามหลักสากล เพื่อขยายโอกาสทางการตลาดของสินค้าในประเทศและต่างประเทศ
                        <br/><br/>
                        ปัจจุบันได้ออกการรรับรองระบบมาตรฐานISO ทุกระบบในประเทศไทยมากกว่า 200 บริษัทฯ
                        <br/><br/>
                        SCW International Certification Co., Ltd. Established since 4/12/2001, operating in the business of providing certification services, ISO 9001, ISO 14001 environmental system, ISO 14001 environmental system, occupational health and safety, ISO 45001, food safety, GHPs/HACCP, ISO 22000, FSSC 22000, medical equipment ISO 13485 from LMS Assessments Limited, which is certified by SCC, Canada and from LMS, EGAC can search for certification information on the LMS website (parent company) and IAF's website, which is the principle of showing the status of the certificate that is valid according to international principles. To expand market opportunities for domestic and international products
                        <br/><br/>
                        Currently, more than 200 companies have issued ISO standard system certification for all systems in Thailand.
                    </Typography>
                </Box>
            </Box>
            {/* <Box
                sx={{
                    p: 4,
                    width: '100vw',
                    position: 'relative',
                    left: '50%',
                    right: '50%',
                    ml: '-50vw',
                    mr: '-50vw',
                    boxShadow: 1
                }}
            >
                <Box>
                        <Typography color="text.secondary" variant="body2" align="left"
                        sx={{
                            ml: 12,
                            mr: 12,
                        }}>
                            Something
                        </Typography>
                </Box>
            </Box> */}
        </Container>
    );
}