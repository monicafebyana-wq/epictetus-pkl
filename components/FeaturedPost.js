import InfoPost from "@/components/InfoPost"
import Link from 'next/link';

export default function featuredPost(){
  return(
    <article>
      <div className="flex -mx-4 lg:items-center items-start flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
          <Link href="/detail">
            <a>
              <img src="/FeaturedTumbnail.png" className="rounded-xl w-full mb-4 md:mb-0"/>
            </a>
          </Link>
        </div>
        <div className="lg:w-4/12 md:w-5/12 px-4">
          <InfoPost 
            category="UI Design"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="./author1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
      <hr className="border-white/10 mt-10 md:hidden" />
    </article>
  )
}