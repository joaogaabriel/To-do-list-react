import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function DescriptionPage() {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-600 p-6 ">
      <div className="w-[500px] space-y-5">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="absolute left-0 top-0 bottom-0 text-slate-200"
          >
            <ChevronLeftCircleIcon />
          </button>
          <Title>Details Task</Title>
        </div>
        <div className="bg-slate-300 p-4 rounded-md">
          <h2 className="text-xl font-bold text-slate-700">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default DescriptionPage;
