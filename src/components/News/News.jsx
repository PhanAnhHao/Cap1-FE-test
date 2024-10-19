import phong from "../../assets/img/phong.png";
import book from "../../assets/img/book_store.png";
import camnangduhoc from "../../assets/img/camnangduhoc.png";
import "./News.scss";

const News = () => {
    return (
        <main>
            <section class="hero">
                <img
                    src={phong}
                    alt="section image"
                    class="section__background"
                />
            </section>

            <section class="content">
                <h2>TIN TỨC & SỰ KIỆN</h2>
                <div class="news-grid">
                    <div class="news-column">
                        {/* <!-- Repeat this structure for each news item --> */}
                        <a href="/detail-news">
                            <article class="news-item">
                                <img
                                    src={book}
                                    alt="News image"
                                    class="news-item__img"
                                />
                                <div class="news__content">
                                    <h3>
                                        3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học
                                        Phổ Thông
                                    </h3>
                                    <div class="news-meta">
                                        <span class="date">05/01/2024</span>
                                        <span class="views">338 views</span>
                                    </div>
                                    <p>
                                        Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng
                                        lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ
                                        tuổi chập chững vào đời tuổi 18. Vậy cha mẹ đã nắm được
                                        những nguyên tắc giúp con thêm phần tự tin, đóng...
                                    </p>
                                </div>
                            </article>
                        </a>
                        <a href="/detail-news">
                            <article class="news-item">
                                <img
                                    src={book}
                                    alt="News image"
                                    class="news-item__img"
                                />
                                <div class="news__content">
                                    <h3>
                                        3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học
                                        Phổ Thông
                                    </h3>
                                    <div class="news-meta">
                                        <span class="date">05/01/2024</span>
                                        <span class="views">338 views</span>
                                    </div>
                                    <p>
                                        Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng
                                        lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ
                                        tuổi chập chững vào đời tuổi 18. Vậy cha mẹ đã nắm được
                                        những nguyên tắc giúp con thêm phần tự tin, đóng...
                                    </p>
                                </div>
                            </article>
                        </a>
                        <a href="/detail-news">
                            <article class="news-item">
                                <img
                                    src={book}
                                    alt="News image"
                                    class="news-item__img"
                                />
                                <div class="news__content">
                                    <h3>
                                        3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học
                                        Phổ Thông
                                    </h3>
                                    <div class="news-meta">
                                        <span class="date">05/01/2024</span>
                                        <span class="views">338 views</span>
                                    </div>
                                    <p>
                                        Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng
                                        lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ
                                        tuổi chập chững vào đời tuổi 18. Vậy cha mẹ đã nắm được
                                        những nguyên tắc giúp con thêm phần tự tin, đóng...
                                    </p>
                                </div>
                            </article>
                        </a>
                        <a href="/detail-news">
                            <article class="news-item">
                                <img
                                    src={book}
                                    alt="News image"
                                    class="news-item__img"
                                />
                                <div class="news__content">
                                    <h3>
                                        3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học
                                        Phổ Thông
                                    </h3>
                                    <div class="news-meta">
                                        <span class="date">05/01/2024</span>
                                        <span class="views">338 views</span>
                                    </div>
                                    <p>
                                        Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng
                                        lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ
                                        tuổi chập chững vào đời tuổi 18. Vậy cha mẹ đã nắm được
                                        những nguyên tắc giúp con thêm phần tự tin, đóng...
                                    </p>
                                </div>
                            </article>
                        </a>
                        <a href="/detail-news">
                            <article class="news-item">
                                <img
                                    src={book}
                                    alt="News image"
                                    class="news-item__img"
                                />
                                <div class="news__content">
                                    <h3>
                                        3 Điều Cha Mẹ Bắt Buộc Ghi Nhớ Khi Có Con Đang Học Trung Học
                                        Phổ Thông
                                    </h3>
                                    <div class="news-meta">
                                        <span class="date">05/01/2024</span>
                                        <span class="views">338 views</span>
                                    </div>
                                    <p>
                                        Cha mẹ luôn mong muốn con đạt được điều tốt nhất. Con càng
                                        lớn nỗi lo cha mẹ ngày một tăng, nhất là khi con đang ở độ
                                        tuổi chập chững vào đời tuổi 18. Vậy cha mẹ đã nắm được
                                        những nguyên tắc giúp con thêm phần tự tin, đóng...
                                    </p>
                                </div>
                            </article>
                        </a>
                        {/* <!-- Repeat for other news items --> */}
                    </div>
                    <div class="sidebar">
                        <div class="sidebar-buttons">
                            <div class="sidebae-buttons__primary">
                                <button>Du học Đài Loan</button>
                                <button>Du học Nhật Bản</button>
                                <button>Du học Hàn Quốc</button>
                            </div>
                            <div class="sidebae-buttons__secondary">
                                <button>Du học Đài Loan</button>
                                <button>Du học Nhật Bản</button>
                                <button>Du học Hàn Quốc</button>
                            </div>
                            <div class="sidebar-content">
                                <h3>CẨM NANG DU HỌC</h3>
                                {/* <!-- Repeat this structure for each handbook item --> */}
                                <div class="handbook-item">
                                    <img src={camnangduhoc} alt="Handbook image" />
                                    <p>
                                        Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn
                                        Cho Du Học Sinh Việt...
                                    </p>
                                </div>
                                <div class="handbook-item">
                                    <img src={camnangduhoc} alt="Handbook image" />
                                    <p>
                                        Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn
                                        Cho Du Học Sinh Việt...
                                    </p>
                                </div>
                                <div class="handbook-item">
                                    <img src={camnangduhoc} alt="Handbook image" />
                                    <p>
                                        Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn
                                        Cho Du Học Sinh Việt...
                                    </p>
                                </div>
                                <div class="handbook-item">
                                    <img src={camnangduhoc} alt="Handbook image" />
                                    <p>
                                        Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn
                                        Cho Du Học Sinh Việt...
                                    </p>
                                </div>
                                <div class="handbook-item">
                                    <img src={camnangduhoc} alt="Handbook image" />
                                    <p>
                                        Workshop Du Học: Canada Và Úc - Lựa chọn Nào Có Lợi Hơn
                                        Cho Du Học Sinh Việt...
                                    </p>
                                </div>
                                {/* <!-- Repeat for other handbook items --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default News;