import Grid from "@mui/material/Grid";
import { Container, Typography, Card, CardContent, CardMedia, Box, Modal, Button } from '@mui/material';
import React from "react";
import '../components/modal.css';


const isoCertifications = [
  {
    id: 1,
    image: 'iso',
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
    details: (
      <div>
        <p>
          ISO 9001:2015 is an international standard that helps organizations ensure consistent quality in products and services while improving customer satisfaction.
        </p>
        <p>
          It provides a framework for managing business processes efficiently, reducing errors, and driving continuous improvement.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Customer focus</li>
          <li>Leadership and employee engagement</li>
          <li>Process-based management</li>
          <li>Evidence-based decisions</li>
          <li>Continual improvement</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Increased efficiency and consistency</li>
          <li>Better customer trust and loyalty</li>
          <li>Fewer errors and rework</li>
          <li>Stronger business reputation</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>To help your business work smarter, meet customer needs, and continually improve overall performance.</p>
      </div>
    ),
  },
  {
    id: 2, image: 'iso', name: 'ISO 13485:2016', description: 'Medical Devices Quality Management Systems',
    details: (
      <div>
        <p>
          ISO 13485:2016 is an international standard specifying requirements for a quality management system (QMS) for organizations involved in the design, production, installation and servicing of medical devices.
        </p>
        <p>
          It focuses on consistent design and manufacturing, regulatory compliance, risk management and traceability to ensure medical devices are safe and perform as intended.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Patient safety and regulatory compliance</li>
          <li>Risk management across the product lifecycle</li>
          <li>Process-based management with documented controls</li>
          <li>Traceability and record-keeping (including device history)</li>
          <li>Supplier and outsourced-process control</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Improved device safety and reliability</li>
          <li>Stronger compliance with regulatory bodies</li>
          <li>Greater control over design, production and validation</li>
          <li>Reduced risk of recalls and adverse events</li>
          <li>Better market access and customer confidence</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To establish a robust QMS that ensures medical devices consistently meet regulatory and customer requirements, protect patient safety, and enable controlled, traceable manufacturing and post-market activities.
        </p>
      </div>

    )
  },
  {
    id: 3, image: 'iso', name: 'ISO 14001:2015', description: 'Environmental Management Systems',
    details: (
      <div>
        <p>
          ISO 14001:2015 is an international standard that provides a framework for establishing an effective Environmental Management System (EMS). It helps organizations manage their environmental responsibilities systematically and sustainably.
        </p>
        <p>
          The standard focuses on identifying and controlling the environmental impact of activities, improving environmental performance, and ensuring compliance with relevant regulations.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Environmental policy and leadership commitment</li>
          <li>Identification of environmental aspects and impacts</li>
          <li>Legal compliance and risk management</li>
          <li>Resource efficiency and pollution prevention</li>
          <li>Continual improvement and environmental performance evaluation</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Reduced environmental impact and resource consumption</li>
          <li>Improved regulatory compliance and reduced risk of penalties</li>
          <li>Enhanced corporate image and stakeholder trust</li>
          <li>Operational efficiency through waste reduction</li>
          <li>Contribution to sustainability goals and climate responsibility</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To help organizations operate responsibly, minimize environmental impact, and achieve continual improvement in environmental performance while complying with legal and stakeholder requirements.
        </p>
      </div>

    )
  },
  {
    id: 4, image: 'iso', name: 'ISO 22000:2018', description: 'Food Safety Management Systems',
    details: (
      <div>
        <p>
          ISO 22000:2018 is an international standard that defines the requirements for a Food Safety Management System (FSMS). It helps organizations in the food chain ensure that food is safe for consumption at every stage of production, handling, and distribution.
        </p>
        <p>
          The standard integrates HACCP principles with a structured management system approach to identify, control, and reduce food safety hazards effectively.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Hazard analysis and risk-based thinking</li>
          <li>Clear communication across the food chain</li>
          <li>Systematic control of critical points (HACCP)</li>
          <li>Management commitment and employee competence</li>
          <li>Continual improvement and system verification</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Ensures food safety and consumer protection</li>
          <li>Improves compliance with legal and regulatory requirements</li>
          <li>Enhances customer trust and brand reputation</li>
          <li>Reduces risks of contamination and recalls</li>
          <li>Improves efficiency and traceability throughout the food chain</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To ensure food safety from farm to fork by managing and controlling hazards, maintaining compliance, and continuously improving the effectiveness of the Food Safety Management System.
        </p>
      </div>

    )
  },
  {
    id: 5, image: 'iso', name: 'ISO 45001:2018', description: 'Occupational Health and Safety Management', details: (
      <div>
        <p>
          ISO 45001:2018 is an international standard that specifies requirements for an Occupational Health and Safety Management System (OHSMS). It helps organizations create safer workplaces by preventing work-related injuries, illnesses, and promoting employee well-being.
        </p>
        <p>
          The standard provides a framework to identify hazards, assess risks, and implement effective controls to improve overall occupational health and safety performance.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Leadership commitment and worker participation</li>
          <li>Hazard identification and risk control</li>
          <li>Compliance with legal and regulatory requirements</li>
          <li>Emergency preparedness and response</li>
          <li>Continual improvement of health and safety performance</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Reduced workplace incidents and injuries</li>
          <li>Improved employee morale and productivity</li>
          <li>Better legal compliance and reduced liabilities</li>
          <li>Enhanced safety culture and stakeholder confidence</li>
          <li>Lower operational disruptions and costs related to accidents</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To provide a safe and healthy workplace by proactively managing occupational health and safety risks, ensuring legal compliance, and continuously improving organizational safety performance.
        </p>
      </div>

    )
  },
  {
    id: 6, image: 'cert', name: 'FSSC 22000', description: '',
    details: (
      <div>
        <p>
          FSSC 22000 (Food Safety System Certification 22000) is an internationally recognized certification scheme for food safety management systems. It is based on ISO 22000, along with sector-specific prerequisite programs (PRPs) and additional requirements set by the FSSC Foundation.
        </p>
        <p>
          The standard ensures effective control of food safety hazards throughout the entire supply chain, from raw material sourcing to final product delivery, promoting consumer trust and regulatory compliance.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Integration of ISO 22000 requirements with industry-specific PRPs</li>
          <li>Risk-based and process-oriented food safety management</li>
          <li>Traceability and control across the food supply chain</li>
          <li>Compliance with regulatory and customer requirements</li>
          <li>Continual improvement and effective communication</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Enhanced food safety assurance and consumer protection</li>
          <li>Global recognition and acceptance by major food manufacturers and retailers</li>
          <li>Improved compliance with legal and customer standards</li>
          <li>Reduced risk of contamination and product recalls</li>
          <li>Strengthened supply chain confidence and transparency</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To ensure the production and supply of safe food by combining ISO 22000 principles with additional requirements, creating a robust and globally recognized food safety management system.
        </p>
      </div>

    )
  },
  {
    id: 7, image: 'cert', name: 'GHPs/HACCP', description: '',
    details: (
      <div>
        <p>
          GHPs (Good Hygiene Practices) and HACCP (Hazard Analysis and Critical Control Points) are fundamental food safety systems that ensure food is produced, handled, and stored under hygienic and controlled conditions to prevent contamination and protect consumers.
        </p>
        <p>
          GHPs provide the foundation for hygiene and sanitation across all food operations, while HACCP builds on this foundation by identifying, evaluating, and controlling specific hazards that can affect food safety.
        </p>

        <p><strong>Key principles:</strong></p>
        <ul>
          <li>Maintaining hygiene in facilities, equipment, and personnel</li>
          <li>Controlling temperature, cross-contamination, and cleaning practices</li>
          <li>Hazard analysis and identification of critical control points (CCPs)</li>
          <li>Monitoring, verification, and record-keeping of CCPs</li>
          <li>Continuous review and improvement of safety controls</li>
        </ul>

        <p><strong>Benefits:</strong></p>
        <ul>
          <li>Ensures food is safe and hygienic for consumers</li>
          <li>Reduces risk of contamination and foodborne illnesses</li>
          <li>Improves compliance with food safety laws and standards</li>
          <li>Enhances customer trust and confidence</li>
          <li>Strengthens operational discipline and employee awareness</li>
        </ul>

        <p><strong>Goal:</strong></p>
        <p>
          To prevent food safety hazards through proper hygiene practices and systematic control at critical points, ensuring that food products are consistently safe and meet regulatory and customer expectations.
        </p>
      </div>

    )
  },
];

export default function Certification() {
  const [openModal, setOpenModal] = React.useState(false);
  const [selectedCert, setSelectedCert] = React.useState<number | null>(null);

  const onClickCard = (certId: number) => {
    // const selectCard = isoCertifications.find(cert => cert.id === certId);
    // alert(`Clicked on certification ID: ${certId}`);
    setSelectedCert(certId);
    setOpenModal(true);
  }

  return (
    <>
      <Box sx={{
        backgroundColor: '#ffffff',
        display: "flex",
        alignItems: "center", // vertical centering
      }}>
        <Container sx={{
          textAlign: 'center',
          mt: 4
        }}>
          <Typography color="text.primary" variant="h6" gutterBottom sx={{ fontWeight: 'bold' }} >
            We provide ISO certifications and others.
          </Typography>

        </Container>
      </Box>
      <Box
        sx={{
          background: 'linear-gradient(to bottom, #ffffff 0%, #e3f2fd 100%)',
          display: "flex",
          mt: 4,
          minHeight: "80vh"
        }}
      >
        <Container
          sx={{
            textAlign: 'center',
            pb: 10
          }}
        >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {isoCertifications.map((cert) => (
              <Grid key={cert.id} size={{ xs: 2, sm: 4, md: 4 }}>
                <Card
                  style={{ cursor: "pointer" }}
                  onClick={() => onClickCard(cert.id)}>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 120,
                      objectFit: "contain",
                    }}
                    image={`./images/certifications/${cert.image
                      .replace(/\s+/g, "")
                      .toLowerCase()}.png`}
                    alt={cert.name}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {cert.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cert.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {openModal && selectedCert !== null && (
        <Modal open={openModal} onClose={() => setOpenModal(false)} className="modal-overlay">
          <Card className="modal-content">
            <CardContent style={{ maxHeight: '80vh', overflow: 'scroll' }}>
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Button
                  onClick={() => setOpenModal(false)}
                  aria-label="Close modal"
                  title="Close"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: 24,
                    lineHeight: 1,
                    padding: 4,
                  }}
                >
                  ×
                </Button>
              </Box>
              <Typography variant="h5" component="div" fontWeight={'bold'}>
                {isoCertifications.find(cert => cert.id === selectedCert)?.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {isoCertifications.find(cert => cert.id === selectedCert)?.description}
              </Typography>
              <Typography variant="body1" component='div' sx={{ marginTop: 2, whiteSpace: 'pre-wrap' }}>
                {isoCertifications.find(cert => cert.id === selectedCert)?.details || 'Details coming soon.'}
              </Typography>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>


  );
}