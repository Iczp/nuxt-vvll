<!-- sitemap.xsl -->

<!-- 设置样式表 -->
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- 定义输出方式 -->
    <xsl:output method="html" doctype-system="about:legacy-compat" indent="yes"/>

    <!-- 匹配根元素 urlset -->
    <xsl:template match="/urlset">
        <html>
            <head>
                <title>Website Sitemap</title>
                <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 20px;
      }
      h1 {
        font-size: 1.8em;
        margin-bottom: 10px;
      }
      ul {
        list-style-type: none;
        padding-left: 0;
      }
      li {
        margin-bottom: 10px;
      }
      a {
        color: #007bff;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
      .changefreq {
        font-style: italic;
        color: #666;
      }
                </style>
            </head>
            <body>
                <h1>Website Sitemap</h1>
                <ul>
                    <!-- 遍历所有 url 元素 -->
                    <xsl:for-each select="url">
                        <li>
                            <!-- 输出链接 -->
                            <a href="{loc}">
                                <xsl:value-of select="loc"/>
                            </a>
                            <!-- 输出 changefreq -->
                            <xsl:if test="changefreq">
                                <div class="changefreq">
              Change frequency: <xsl:value-of select="changefreq"/>
                                </div>
                            </xsl:if>
                        </li>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>
