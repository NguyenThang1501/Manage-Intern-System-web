import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Xem danh sách chi tiết các vị trí thực tập',
    description: 'Tìm hiểu doanh nghiệp, vị trí và yêu cầu của vị trí. Sau đó, lựa chọn các vị trí phù hợp với nguyện vọng và khả năng của bản thân.',
  },
  {
    label: 'Truy cập trang đăng ký nguyện vọng',
    description:
      'Đăng ký nguyện vọng bằng cách nhập mã vị trí mong muốn.',
  },
  {
    label: 'Kiểm tra kết quả phân công',
    description: 'Khi có kết quả phân công, truy cập vào chức năng Xem kết quả phân công để xem kết quả.',
  },
];

export default function HướngDẫnĐăngKý() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Bước cuối cùng</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Hoàn thành' : 'Tiếp tục'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Quay lại
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Tất cả các bước đã hoàn thành - bạn đã xong</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Đặt lại
          </Button>
        </Paper>
      )}
    </Box>
  );
}