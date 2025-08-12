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

                        บริษัท SCW เป็นผู้นำด้านการตรวจประเมินและให้การรับรองมาตรฐานสากล (ISO) ด้วยประสบการณ์ยาวนานกว่า 20 ปี เรามุ่งมั่นสนับสนุนองค์กรในทุกภาคธุรกิจให้ยกระดับคุณภาพ ความปลอดภัย และความยั่งยืน ผ่านมาตรฐานที่ได้รับการยอมรับทั่วโลก อาทิ ISO 9001, ISO 14001, ISO 22000, ISO 45001 รวมถึงระบบ FSSC
                        <br /><br />
                        การตรวจประเมินทุกขั้นตอนดำเนินการโดยผู้ตรวจที่มีความเชี่ยวชาญสูงและมีประสบการณ์ตรงในอุตสาหกรรม ใบรับรอง (Certificate) ที่ออก หรือรับรองโดย SCW ได้รับการยอมรับจากหน่วยงานกำกับดูแลระดับสากล สามารถตรวจสอบได้จริงผ่านเว็บไซต์ของ AB และ IAF ซึ่งเป็นการการันตีถึงความถูกต้องและความน่าเชื่อถือของมาตรฐานที่เรามอบให้
                        <br /><br />
                        SCW พร้อมเป็นพันธมิตรที่ไว้ใจได้ เพื่อช่วยองค์กรของคุณก้าวสู่ความสำเร็จอย่างยั่งยืนในเวทีโลก
                        {/* <br /><br /> */}
                        {/* At SCW, our journey began with a simple yet powerful vision: to create meaningful impact through innovative solutions and unwavering commitment to excellence. Over the years, we have grown into a dynamic organization that values integrity, collaboration, and continuous improvement. Our team is composed of passionate professionals who bring diverse perspectives and expertise, enabling us to tackle challenges creatively and deliver outstanding results for our clients.
                        <br />
                        <br />
                        We understand that every client is unique, and we take pride in offering personalized services tailored to specific needs. By fostering open communication and building strong relationships, we ensure that our clients feel supported at every step of their journey. Our approach is rooted in transparency and accountability, which allows us to build trust and achieve sustainable success together.
                        <br />
                        <br />
                        Looking ahead, we remain dedicated to empowering our clients and communities by embracing new technologies and staying ahead of industry trends. We believe that our core values—integrity, innovation, and customer-centricity—will continue to guide us as we strive to make a positive difference. Thank you for choosing SCG as your trusted partner; we look forward to achieving great things together. */}
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