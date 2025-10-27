import { Button } from "@/components/ui/button";

interface LoadingButtonProps {
  label: string;
  labelLoading: string;
  isLoading: boolean;
}

const LoadingButton = ({ label, labelLoading, isLoading }: LoadingButtonProps) => {
  return (
    <Button type="submit" disabled={isLoading}>
      {isLoading ? labelLoading : label}
    </Button>
  );
};

export default LoadingButton;
