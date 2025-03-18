import BlogDetailsArea from "@/components/blogs/blog-details/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import blog_data from "@/data/blogData";
import Wrapper from "@/layout/Wrapper";
import FooterOne from "@/layout/footers/FooterOne";
import HeaderOne from "@/layout/headers/HeaderOne";

export const metadata = {
   title: "Blog Details Charite - Charity & Donation React Next js Template",
};
const index = ({ params }: { params: { id: string | string[] } }) => {

      const blogId = Array.isArray(params.id) ? params.id[0] : params.id; // Ensure blogId is a string

   const blogs = blog_data.filter(items => items.page === "inner_page");
   const single_blog = blogs.find((item) => Number(item.id) === Number(blogId));

   return (
      <Wrapper>
         <HeaderOne />
         <main>
            <Breadcrumb page_title="Blog Details" page_list="Blog Details" />
            <BlogDetailsArea single_blog={single_blog} key={single_blog?.id} />
         </main>
         <FooterOne />
      </Wrapper>
   )
}

export default index