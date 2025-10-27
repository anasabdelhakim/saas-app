import CompanionCard from "@/components/CompanionCard";
import SearchFilters from "@/components/SearchFilters";
import SearchInput from "@/components/SearchInput";
import { getAllCompanions } from "@/lib/actions/combainions.actions";
import { getSubjectColor } from "@/lib/utils";
import Image from "next/image";
const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SearchFilters />
        </div>
      </section>
      <section className="companions-grid">
        {companions?.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
        {companions.length === 0 &&  (
          <div className="pt-10 flex flex-col justify-center items-center ">
                        <Image
              src="/images/assignments.svg"
              alt="no Subject"
              width={300}
              height={300}
            />
            <h1>No {subject} is avalible for now</h1>

          </div>
        )}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
