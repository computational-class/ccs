document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-a9a1cf2ca01efd362bfa52312712ae94.css">')
document.write('<div id=\"gist95928724\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-torch101_numpy-py\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-python \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-torch101_numpy-py-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Initializes parameters &quot;a&quot; and &quot;b&quot; randomly<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC2\" class=\"blob-code blob-code-inner js-file-line\">np.random.seed(<span class=\"pl-c1\">42<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC3\" class=\"blob-code blob-code-inner js-file-line\">a <span class=\"pl-k\">=<\/span> np.random.randn(<span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC4\" class=\"blob-code blob-code-inner js-file-line\">b <span class=\"pl-k\">=<\/span> np.random.randn(<span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(a, b)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Sets learning rate<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC9\" class=\"blob-code blob-code-inner js-file-line\">lr <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1e-1<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Defines number of epochs<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC11\" class=\"blob-code blob-code-inner js-file-line\">n_epochs <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1000<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">for<\/span> epoch <span class=\"pl-k\">in<\/span> <span class=\"pl-c1\">range<\/span>(n_epochs):<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC14\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Computes our model&#39;s predicted output<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC15\" class=\"blob-code blob-code-inner js-file-line\">    yhat <span class=\"pl-k\">=<\/span> a <span class=\"pl-k\">+<\/span> b <span class=\"pl-k\">*<\/span> x_train<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC16\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> How wrong is our model? That&#39;s the error! <\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC18\" class=\"blob-code blob-code-inner js-file-line\">    error <span class=\"pl-k\">=<\/span> (y_train <span class=\"pl-k\">-<\/span> yhat)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> It is a regression, so it computes mean squared error (MSE)<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC20\" class=\"blob-code blob-code-inner js-file-line\">    loss <span class=\"pl-k\">=<\/span> (error <span class=\"pl-k\">**<\/span> <span class=\"pl-c1\">2<\/span>).mean()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L22\" class=\"blob-num js-line-number\" data-line-number=\"22\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC22\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Computes gradients for both &quot;a&quot; and &quot;b&quot; parameters<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L23\" class=\"blob-num js-line-number\" data-line-number=\"23\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC23\" class=\"blob-code blob-code-inner js-file-line\">    a_grad <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">-<\/span><span class=\"pl-c1\">2<\/span> <span class=\"pl-k\">*<\/span> error.mean()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L24\" class=\"blob-num js-line-number\" data-line-number=\"24\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC24\" class=\"blob-code blob-code-inner js-file-line\">    b_grad <span class=\"pl-k\">=<\/span> <span class=\"pl-k\">-<\/span><span class=\"pl-c1\">2<\/span> <span class=\"pl-k\">*<\/span> (x_train <span class=\"pl-k\">*<\/span> error).mean()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L25\" class=\"blob-num js-line-number\" data-line-number=\"25\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC25\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L26\" class=\"blob-num js-line-number\" data-line-number=\"26\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC26\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Updates parameters using gradients and the learning rate<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L27\" class=\"blob-num js-line-number\" data-line-number=\"27\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC27\" class=\"blob-code blob-code-inner js-file-line\">    a <span class=\"pl-k\">=<\/span> a <span class=\"pl-k\">-<\/span> lr <span class=\"pl-k\">*<\/span> a_grad<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L28\" class=\"blob-num js-line-number\" data-line-number=\"28\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC28\" class=\"blob-code blob-code-inner js-file-line\">    b <span class=\"pl-k\">=<\/span> b <span class=\"pl-k\">-<\/span> lr <span class=\"pl-k\">*<\/span> b_grad<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L29\" class=\"blob-num js-line-number\" data-line-number=\"29\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC29\" class=\"blob-code blob-code-inner js-file-line\">    <\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L30\" class=\"blob-num js-line-number\" data-line-number=\"30\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC30\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(a, b)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L31\" class=\"blob-num js-line-number\" data-line-number=\"31\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC31\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L32\" class=\"blob-num js-line-number\" data-line-number=\"32\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC32\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c\"><span class=\"pl-c\">#<\/span> Sanity Check: do we get the same results as our gradient descent?<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L33\" class=\"blob-num js-line-number\" data-line-number=\"33\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC33\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">from<\/span> sklearn.linear_model <span class=\"pl-k\">import<\/span> LinearRegression<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L34\" class=\"blob-num js-line-number\" data-line-number=\"34\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC34\" class=\"blob-code blob-code-inner js-file-line\">linr <span class=\"pl-k\">=<\/span> LinearRegression()<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L35\" class=\"blob-num js-line-number\" data-line-number=\"35\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC35\" class=\"blob-code blob-code-inner js-file-line\">linr.fit(x_train, y_train)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-torch101_numpy-py-L36\" class=\"blob-num js-line-number\" data-line-number=\"36\"><\/td>\n        <td id=\"file-torch101_numpy-py-LC36\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">print<\/span>(linr.intercept_, linr.coef_[<span class=\"pl-c1\">0<\/span>])<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/dvgodoy/7db496440987ed2bf42d1cbfeca30f37/raw/f96f5bcecdd63bfa2ed991a33c9a4e4094de8f3f/torch101_numpy.py\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/dvgodoy/7db496440987ed2bf42d1cbfeca30f37#file-torch101_numpy-py\">torch101_numpy.py<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')